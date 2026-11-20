import http from 'node:http';
import { handleApiRequest } from './apiHandler.js';

const PORT = process.env.PORT || 3001;

const server = http.createServer(async (req, res) => {
  // CORS headers for local development if running on separate port
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url && req.url.startsWith('/api')) {
    await handleApiRequest(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(PORT, () => {
  console.log(`[ZisanTech API Server] Running on http://localhost:${PORT}`);
});
