/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#151619',
                // 'secondary': '#1C1C27',
                'secondary': '#28293D',
                // 'tertiary': '#9090A7',
                'tertiary': '#6b7280',
                'text-primary': '#F2F2F4',
                'text-secondary': '#555870',
                'system-red': '#FF5C5C',
                'system-blue': '#3D7BFA',
                'system-green': '#39DA8A',
                'system-yellow': '#FEDD49',
            },
        },
    },
    plugins: [require("daisyui")],
}
