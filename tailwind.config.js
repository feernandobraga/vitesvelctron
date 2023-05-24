/** @type {import('tailwindcss').Config} */
export default {
    mode: "jit",
    content: [
        "./index.html",
        "./src/**/*.{html,svelte,js,ts,}",
        "./electron/**/*.{html,svelte,js,ts,}"
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}