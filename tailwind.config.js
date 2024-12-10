/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '540px',
      md: '767px',
      lg: '960px',
      xl: '1200px'
    },
    extend: {
      fontFamily:{
        main_text: ["Anton", "sans-serif"],
        regular_text: ["Roboto", "sans-serif"] 
      },
      colors:{
        primary: "#00ADBB",
        secundary: "#00635D",
        accent: "#B0FD01",
        neutral: "#CED4DA",
        DEFAULT: "#F1F1F1",
        background: "#2c2851"
      },
      maxWidth:{
        container: '1200px', 
      },
      backgroundImage:{
        home: "url('./src/assets/background.webp')",
        description: "url('./src/assets/bg_description.png')"
      }
    },
  },
  plugins: [],
}

