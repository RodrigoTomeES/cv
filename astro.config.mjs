import { defineConfig } from 'astro/config';
import { i18n } from './src/i18n/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://cv.rodrigotome.es',
    trailingSlash: 'never',
    build: { format: 'file' },
    i18n
});
