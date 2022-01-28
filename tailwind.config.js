module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				white: "#D7D7D7",
				black: "#060606",
				sky: "#450BFC",
				"sky-two": "#6130FC",
				"sky-three": "#774DFD",
				darkbg: "#101010",
			},
			animation: {
				search: "search 1s ease-in-out",
			},
			keyframes: {
				search: {
					"0%": {
						transform: "translateY(100%)",
						opacity: "0",
					},
					"100%": {
						transform: "translateY(0)",
						opacity: "1",
					},
				},
			},
			screens: {
				xs: "450px",
			},
		},
		fontFamily: {
			poppins: ["Poppins", "sans-serif"],
		},
	},
	plugins: [],
};
