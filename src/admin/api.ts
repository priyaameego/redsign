// ZisanTech Admin API Client

const TOKEN_KEY = 'zisantech_admin_token';
const USER_KEY = 'zisantech_admin_user';

export interface AdminUser {
  id: number;
  username: string;
  role: string;
}

export function getStoredToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function setStoredSession(token: string, user: AdminUser) {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function clearStoredSession() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function getStoredUser(): AdminUser | null {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

/**
 * Universal API Fetch with Bearer Auth Header and error handling
 */
export async function apiFetch<T = any>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = getStoredToken();
  const headers = new Headers(options.headers || {});

  if (!headers.has('Content-Type') && !(options.body instanceof FormData)) {
    headers.set('Content-Type', 'application/json');
  }

  if (token && !headers.has('Authorization')) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const res = await fetch(endpoint, {
    ...options,
    headers
  });

  if (res.status === 401) {
    clearStoredSession();
    // Only redirect if currently on an admin page (not on public pages)
    if (window.location.pathname.startsWith('/admin') && window.location.pathname !== '/admin/login') {
      window.location.href = '/admin/login';
    }
  }

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.error || `Request failed with status ${res.status}`);
  }

  return data;
}

/**
 * Upload one or more images (via Base64 payload for reliable cross-platform transport)
 */
export async function uploadImages(files: File[]): Promise<string[]> {
  const filePromises = files.map((file) => {
    return new Promise<{ name: string; type: string; data: string }>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve({
          name: file.name,
          type: file.type,
          data: reader.result as string
        });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  });

  const encodedFiles = await Promise.all(filePromises);

  const res = await apiFetch<{ success: boolean; urls: string[] }>('/api/upload', {
    method: 'POST',
    body: JSON.stringify({ files: encodedFiles })
  });

  return res.urls || [];
}
