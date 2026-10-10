// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
// });

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: './', // Add this line for GitHub Pages compatibility
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
// });

import { execSync } from 'node:child_process';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

// The landing page's half of the version ID, served as /version.json for the app
// to read: the number of the last PR merged, read from the last "Merge pull
// request #N" commit. "?" (never a failed build) when there is no history.
const landingPrNumber = (): string => {
  try {
    const subject = execSync('git log --first-parent --merges -1 --format=%s', {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    });
    return subject.match(/#(\d+)/)?.[1] ?? '?';
  } catch {
    return '?';
  }
};

const versionFile = (): Plugin => {
  const body = () => JSON.stringify({ pr: Number(landingPrNumber()) || null });
  return {
    name: 'version-file',
    configureServer(server) {
      server.middlewares.use('/version.json', (_req, res) => {
        res.setHeader('Content-Type', 'application/json');
        // This handler answers before Vite's own CORS middleware; GitHub Pages sends this itself.
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.end(body());
      });
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'version.json', source: body() });
    },
  };
};

export default defineConfig(({ command }) => ({
  plugins: [react(), versionFile()],
  base: command === 'build' ? './' : '/',
  server: {
    port: 5173,
    strictPort: false, // If port is in use, try next available port
    host: true, // Listen on all addresses
    open: false, // Don't auto-open browser
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));