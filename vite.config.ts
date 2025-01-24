import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills(), svgr({})],
  resolve: {
    conditions: ['source'],
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
});
