/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '4xl' : '0 20px 34px -16px hsl(346, 100%, 66%)',
      },
      colors: {
        primary: {
          400: 'hsl(4, 100%, 67%)',
          500: 'hsl(346, 100%, 66%)',
        },
        neutral: {
          900:'hsl(234, 29%, 20%)',
          800: 'hsl(235, 18%, 26%)',
          400: 'hsl(231, 7%, 60%)',
          100: 'hsl(0, 0%, 100%)',
        }, 
      },
      screens: {
        'mobile' : '375px',
        'desktop' : '1440px',  
        'andriod' : '412px',
      },
    },
  },
  plugins: [],
}

