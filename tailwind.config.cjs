module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navText: "#000405",
        navBtn: " #AD4CBE",
        aboutBg: "#CCBEE7",
        aboutText: "#341E5C",
        grayBg: "#F8F8F8",
        faqBtn: "#673BB7",
        lighterPurple: "#822194",
        grey: "#E6E8E8",
        deepPurple: "#AC4CBE",
        lightGrey: "#F5F6F6",
        // lightPurple:'#1E1E1E',
      },
      backgroundImage: {
        "uniqueBG-white": "url('/src/assets/about/uniqueBG.png')",
      },
      boxShadow:{
        close: '0px 8px 16px 2px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
