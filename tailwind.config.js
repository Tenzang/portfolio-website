/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'dark-primary': '#16151A',
                'dark-secondary': 'slate-800',
                'dark-highlight': '#FCFCFA',
                'light-primary': 'white',
                'light-secondary': '#94A3B8',
                'light-highlight': '#16151A'
            },
            dropShadow: {
                light: '0 0 15px black',
                dark: '0 0 5px white'
            }
        },
        darkMode: 'class'
    },
    plugins: []
};
