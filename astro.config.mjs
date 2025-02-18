// @ts-check
import { defineConfig } from 'astro/config';
import site from '/src/data/site.json';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: site.url,
  integrations: [sitemap()]
});