import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import nodejs from '@astrojs/node';
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue()],
  // el modo hibrido es para que astro pueda renderizar html y cualquier framework en el mismo proyecto
  // el modo server es para que astro renderice solo html
  output: 'hybrid',
  adapter: nodejs({
    mode: 'middleware' // or 'standalone'
  }),
});