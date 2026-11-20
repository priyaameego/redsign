import { handleApiRequest } from './apiHandler.js';

/**
 * Vite plugin that intercepts /api/* requests and delegates to our local Node.js API handler
 */
export function apiPlugin() {
  return {
    name: 'zisantech-api-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url && req.url.startsWith('/api')) {
          await handleApiRequest(req, res);
        } else {
          next();
        }
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url && req.url.startsWith('/api')) {
          await handleApiRequest(req, res);
        } else {
          next();
        }
      });
    }
  };
}
