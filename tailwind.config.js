module.exports = {
  // mode: 'jit',
  // purge: ['/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {}
  },
  plugins: [require("@tailwindcss/line-clamp")]
};
