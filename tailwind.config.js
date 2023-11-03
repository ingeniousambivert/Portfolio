module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./layouts/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		backgroundColor: (theme) => ({
			...theme("colors"),
			"gray-950": "#111111",
		}),
		extend: {
			backgroundImage: {
				"gradient-to-right":
					"linear-gradient(to right, #ff9a8b, #c779d0, #4bc0c8)",
				"gradient-to-bottom":
					"linear-gradient(to bottom, #ff9a8b, #c779d0, #4bc0c8)",
			},
			textColor: {
				"transparent-text": "transparent",
			},
			backgroundClip: {
				text: "text",
			},
			textFillColor: {
				transparent: "transparent",
			},
			width: { 81: "21rem", 82: "22rem", 104: "30rem", 120: "40rem" },
			borderWidth: { 5: "0.4rem" },
			fontFamily: {
				modern: ["Lato"],
				classic: ["Oswald"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
