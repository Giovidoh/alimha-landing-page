import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "hero-world-img": "url(../public/images/world.png)",
                "who-are-we-bg": "url(../public/images/about-us-bg.png)",
            },
            colors: {
                "primary-blue": "#0039BA",
                "secondary-blue": "#0067F8",
                "dark-blue": "#001036",
                "gray-1": "#969696",
                "gray-2": "#ACACAC",
                "orange-1": "#FF5500",
                "green-1": "#20CB70",
            },
        },
    },
    plugins: [],
};
export default config;
