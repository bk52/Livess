import { crx } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react';
import { join, resolve } from 'path';
import { defineConfig } from 'vite';
import manifest from './src/manifest';

export default defineConfig({
  // @see https://github.com/crxjs/chrome-extension-tools/issues/696
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
  },
  // prevent src/ prefix on extension urls
  root: resolve(__dirname, 'src'),
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        // see web_accessible_resources in the manifest config
        // welcome: join(__dirname, 'src/welcome/welcome.html'),
        sidebar: join(__dirname, 'src/sidebar/sidebar.html'),
        //content: join(__dirname, 'src/content/index.tsx'),
      },
      output: {
        chunkFileNames: 'assets/chunk-[hash].js',
        // entryFileNames(chunkInfo) {
        //   return chunkInfo.name.includes('content')
        //     ? 'assets/content.js'
        //     : `assets/[name]-[hash].js`;
        // },
      },
    },
  },
  plugins: [react(), crx({ manifest })],
});
