/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				// Jade accent color — matches --accent-jade: #2f8f7a in the original CSS
				jade: "#2f8f7a",
				// Main background — matches --bg-main: #0f1413
				bgMain: "#0f1413",
				// Main text — matches --text-main: #e6ecea
				textMain: "#e6ecea",
			},
			fontFamily: {
				inter: ["Inter", "system-ui", "sans-serif"],
			},
		},
	},
	plugins: [],
}
