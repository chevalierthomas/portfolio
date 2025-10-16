import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  site: 'https://thomas-chevalier.dev',
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro'
    }
  }
});
