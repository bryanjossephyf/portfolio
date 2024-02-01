/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		fontFamily: {
			"outfit-font": ['Outfit']
		},
		colors: {
			"color-nav": "#FDFAF3"
		}
	  },
	},
	plugins: [],
  };