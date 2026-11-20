import crypto from 'node:crypto';
import { db } from './db.js';

const ITERATIONS = 100000;
const KEY_LEN = 64;
const DIGEST = 'sha512';
const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

/**
 * Hash a plaintext password with a unique salt
 */
export function hashPassword(password, existingSalt = null) {
  const salt = existingSalt || crypto.randomBytes(32).toString('hex');
  const hash = crypto
    .pbkdf2Sync(password, salt, ITERATIONS, KEY_LEN, DIGEST)
    .toString('hex');
  return { hash, salt };
}

/**
 * Verify a plaintext password against a stored hash and salt
 */
export function verifyPassword(password, storedHash, salt) {
  const { hash } = hashPassword(password, salt);
  const bufA = Buffer.from(hash, 'hex');
  const bufB = Buffer.from(storedHash, 'hex');
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

/**
 * Create a new authenticated session for a user
 */
export function createSession(userId) {
  const token = crypto.randomBytes(32).toString('hex');
  const expiresAt = Date.now() + SESSION_DURATION_MS;
  const now = new Date().toISOString();

  // Clean up expired sessions periodically
  db.prepare('DELETE FROM sessions WHERE expires_at < ?').run(Date.now());

  db.prepare(`
    INSERT INTO sessions (token, user_id, expires_at, created_at)
    VALUES (?, ?, ?, ?)
  `).run(token, userId, expiresAt, now);

  return { token, expiresAt };
}

/**
 * Invalidate a session token
 */
export function deleteSession(token) {
  db.prepare('DELETE FROM sessions WHERE token = ?').run(token);
}

/**
 * Validate session token and return user if active
 */
export function validateSession(token) {
  if (!token || typeof token !== 'string') return null;

  const session = db.prepare(`
    SELECT s.token, s.user_id, s.expires_at, u.id, u.username, u.role
    FROM sessions s
    JOIN users u ON s.user_id = u.id
    WHERE s.token = ? AND s.expires_at > ?
  `).get(token, Date.now());

  if (!session) return null;

  return {
    id: session.id,
    username: session.username,
    role: session.role
  };
}

/**
 * Extract token from request (Bearer header or cookie)
 */
export function extractToken(req) {
  // 1. Authorization header: Bearer <token>
  const authHeader = req.headers['authorization'] || req.headers['Authorization'];
  if (authHeader && typeof authHeader === 'string' && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7).trim();
  }

  // 2. Cookie header: admin_token=<token>
  const cookieHeader = req.headers['cookie'];
  if (cookieHeader && typeof cookieHeader === 'string') {
    const match = cookieHeader.match(/admin_token=([^;]+)/);
    if (match && match[1]) {
      return decodeURIComponent(match[1].trim());
    }
  }

  return null;
}
