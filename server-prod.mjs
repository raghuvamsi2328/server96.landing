/**
 * Production server with gzip compression enabled
 * Serves the SSR application with proper compression and caching headers
 */

import compression from 'compression';
import express from 'express';
import { createServer } from 'http';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env['PORT'] || 4200;

// Enable compression middleware
app.use(compression());

// Serve static assets with cache busting
app.use(
  '/assets',
  express.static(join(__dirname, 'dist/server96-landing/browser/assets'), {
    maxAge: '1y',
    immutable: true
  })
);

// Serve other static files
app.use(
  express.static(join(__dirname, 'dist/server96-landing/browser'), {
    maxAge: '1d',
    setHeaders: (res, path) => {
      if (path.endsWith('.html')) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      }
    }
  })
);

import('./dist/server96-landing/server/main.server.mjs').then((module) => {
  const { default: render } = module;

  app.use(async (req, res) => {
    try {
      const html = await render(req.originalUrl);
      res.send(html);
    } catch (err) {
      console.error('SSR Error:', err);
      res.status(500).send('Server error');
    }
  });

  createServer(app).listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('✓ Compression enabled');
    console.log('✓ Production optimizations active');
  });
});
