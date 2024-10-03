import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
    darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
			},
            colors: {
                primary: '#007a87',
                darkPrimary: '#ffffff',
            },
		},
	},
	plugins: [],
} satisfies Config;


