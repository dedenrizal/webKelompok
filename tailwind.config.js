/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "2xs": "470px", // Custom screen for extra small devices
        "3xl": "1600px", // Custom screen for extra large devices
        "4k": "3840px", // Custom screen for 4K resolution devices
      },
    },
  },
  plugins: [],
};
