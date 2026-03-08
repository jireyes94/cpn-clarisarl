/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				brand: {
					olive: '#2F4F4F',
					sand: '#E8DFC8',
					cream: '#F7F5F2',
					gold: '#C6A75E',
				},
			},
			fontFamily: {
				// Para el nombre y títulos principales
				display: ['"Playfair Display"', 'serif'],
				// Para subtítulos y cuerpo de texto
				sans: ['"Montserrat"', 'sans-serif'],
			},
		},
	},
	plugins: [],
};