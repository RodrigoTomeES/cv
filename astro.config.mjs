import { defineConfig } from 'astro/config';
import { i18n } from './src/i18n/config';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import tailwind from '@astrojs/tailwind';
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
        tailwind({
          config: {
            applyBaseStyles: false,
          },
        }),
        rename({ targetExt: ["html"] }),
        compress({ img: false, SVG: false }),
        sitemap(),
    ],
    i18n
});
