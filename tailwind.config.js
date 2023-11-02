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
