import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import { remarkReadingTime } from './src/remark-reading-time.mjs';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), svelte(), mdx()],
    markdown: {
        remarkPlugins: [remarkReadingTime]
    }
});
