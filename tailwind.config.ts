import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            "primary-blue": "#0039BA",
            "secondary-blue": "#0067F8",
            "dark-blue": "#001036",
            "gray-1": "#969696",
            "gray-2": "#ACACAC",
            "orange-1": "#FF5500",
            "green-1": "#20CB70",
            white: "#FFFFFF",
            black: "#000000",
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
