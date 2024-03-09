import { defineConfig } from 'astro/config';
import { i18n } from './src/i18n/config';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
    site: 'https://cv.rodrigotome.es',
    trailingSlash: 'never',
    compressHTML: true,
    output: 'static',
    build: { 
        format: 'file',
        inlineStylesheets: 'always'
    },
    integrations: [
        sitemap(),
        compress({ img: false, SVG: false }),
    ],
    i18n
});
