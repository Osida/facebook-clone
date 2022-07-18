/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0F0F13',
                secondary: '#1A1C20',
                accent: '#1B74E4',
                active: '#00AF5B',
                input: '#35383C',
            },
            flexBasis: {
                '10/100': '10%',
                '22/100': '22%',
            }
        },
    },
    plugins: [
        require("daisyui"),
        require('tailwind-scrollbar-hide')
    ],
}
