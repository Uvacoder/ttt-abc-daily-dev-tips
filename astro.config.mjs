import { defineConfig } from "astro/config";
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://daily-dev-tips.com/',
  sitemap: false,
  integrations: [tailwind()]
});
