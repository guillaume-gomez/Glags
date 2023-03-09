module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
      themes: [
        {
          mytheme: {
             "primary": "#fad2db",
             "secondary": "#e72385",
             "accent": "#f8ac1e",
             "neutral": "#a6d9e2",
             "base-100": "#F26A8D",
             "info": "#66C7FF",
             "success": "#87D039",
             "warning": "#E3D664",
             "error": "#FF1515",
          },
        },
      ],
    },
  plugins: [require("daisyui")],
}
