import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { webcrypto } from 'node:crypto';

// Ensure Vite has access to a Web Crypto implementation when running on older Node versions
if (!globalThis.crypto) {
  globalThis.crypto = webcrypto as unknown as Crypto;
}

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@styles': path.resolve(__dirname, 'src/styles')
    }
  }
});
