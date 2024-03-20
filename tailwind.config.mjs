/** @type {import('tailwindcss').Config} */
export default {
	// @see https://github.com/tailwindlabs/tailwindcss/discussions/7317
	experimental: {
		optimizeUniversalDefaults: true,
	},
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'white': '#fff',
			'black': '#000',
			primary: {
			  50: '#f2f2f2',
			  100: '#eee',
			  200: '#ddd',
			  300: '#777',
			  400: '#666',
			  500: '#555',
			  600: '#444',
			  800: '#222',
			  900: '#111',
			},
			accent: '#00BC2F'
		},
		animation: {
			flicker: 'flicker 3s ease-in infinite'
		},
		keyframes: {
			flicker: {
				'0%, 100%': {
					opacity: 1,
				},
				'50%': {
					opacity: 0.25,
				},
			},
		}
	},
}
