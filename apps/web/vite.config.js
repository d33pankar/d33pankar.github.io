import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';

const RESUME_DIR = fileURLToPath(new URL('./public/Resume', import.meta.url));
const VIRTUAL_ID = 'virtual:resume-manifest';
const RESOLVED_ID = '\0' + VIRTUAL_ID;

// Reads the Resume folder and returns the PDFs sorted newest-first (by mtime),
// so the most recently added/updated file is always index 0.
function readResumes() {
  try {
    return fs
      .readdirSync(RESUME_DIR)
      .filter((name) => name.toLowerCase().endsWith('.pdf'))
      .map((name) => {
        const stat = fs.statSync(path.join(RESUME_DIR, name));
        return {
          name,
          url: '/Resume/' + encodeURIComponent(name),
          mtime: stat.mtimeMs,
          updated: new Date(stat.mtimeMs).toISOString().slice(0, 10),
        };
      })
      .sort((a, b) => b.mtime - a.mtime);
  } catch (_e) {
    return [];
  }
}

// Exposes the resume list as a virtual module and hot-reloads the dev server
// whenever a PDF is added, changed, or removed in public/Resume.
function resumeManifestPlugin() {
  return {
    name: 'resume-manifest',
    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID;
      return null;
    },
    load(id) {
      if (id === RESOLVED_ID) {
        return `export default ${JSON.stringify(readResumes())};`;
      }
      return null;
    },
    configureServer(server) {
      fs.mkdirSync(RESUME_DIR, { recursive: true });
      server.watcher.add(RESUME_DIR);
      const onChange = (file) => {
        if (!file || path.resolve(file).startsWith(RESUME_DIR)) {
          const mod = server.moduleGraph.getModuleById(RESOLVED_ID);
          if (mod) server.moduleGraph.invalidateModule(mod);
          server.ws.send({ type: 'full-reload' });
        }
      };
      server.watcher.on('add', onChange);
      server.watcher.on('unlink', onChange);
      server.watcher.on('change', onChange);
    },
  };
}

export default defineConfig({
  plugins: [react(), resumeManifestPlugin()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  server: {
    host: '::',
    port: 3000,
    allowedHosts: [
      'deepankar.dev',
      'www.deepankar.dev',
    ],
  },
});
