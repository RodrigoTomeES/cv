import { defineConfig } from 'astro/config';
import { i18n } from './src/i18n/config';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import tailwindcss from "@tailwindcss/vite";
import rename from 'astro-rename';

// https://astro.build/config
export default defineConfig({
    site: 'https://cv.rodrigotome.es',
    prefetch: true,
    trailingSlash: 'never',
    compressHTML: true,
    output: 'static',
    build: { 
        format: 'directory',
        inlineStylesheets: 'always'
    },
    integrations: [
        rename({ targetExt: ["html"] }),
        compress({ img: false, SVG: false }),
        sitemap(),
    ],
    vite: {
        plugins: [tailwindcss()],
    },
    i18n
});
