/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app-components/**/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      maxWidth: {
        // Default to 600px
        "mdx": "600px",
      },
      screens: {
        // Custom breakpoint for 1080px
        "lg-mdx": "1080px",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      addUtilities({
        "@screen lg-mdx": {
          ".max-w-mdx": {
            maxWidth: "700px",
          },
        },
      });
    },
  ],
};
