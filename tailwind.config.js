/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true, // Căn giữa container
      padding: {
        xl: '0rem', // Padding cho màn hình rất lớn
        '2xl': '0rem', // Padding cho màn hình 2xl
      },
    },
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      },
      screens: {
        // 'xl1600': '1600px',
        // 'xl1900': '1900px',
        'xsm': '320px',  // Màn hình nhỏ
        'sm430': '430px', // Màn hình 430px
        'sm375': '375px', // Màn hình 430px

      },
    },
  },
  plugins: [],
}