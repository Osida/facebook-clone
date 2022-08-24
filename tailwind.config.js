/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./layouts/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primaryColor: "#0F0F13",
                secondaryColor: "#1A1C20",
                accentColor: "#1877F2",
                iconColor: "#9F9FA1",
                inputColor: "#35383C",
                infoColor: "#3ABFF8",
                successColor: "#00AF5B",
                warningColor: "#FBBD23",
                errorColor: "#F87171",
            },
            flex: {
                '2': '2 2 0%',
                '3': '3 3 0%',
            },
            width: {
                '9/10': '90%',
            }
        }
    },
    plugins: [
        require("daisyui"),
        require('tailwind-scrollbar-hide')
    ],
}