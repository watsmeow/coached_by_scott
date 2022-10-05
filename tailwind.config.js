/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#82c0cc',
        'white': '#ffffff',
        'red': '#56100A'
      },
      backgroundImage: {
        'banner': "url('/src/images/BannerImage.png')",
        'transform': "url('/src/images/Transformation.jpg')",
        'transform2': "url('/src/images/Transformation2.jpg')",
        'transform3': "url('/src/images/Transformation3.jpg')",
      },
      extend: {
        margin: {
          'circle': '50%',
        }
      }
    },
  },
  plugins: [],
}
