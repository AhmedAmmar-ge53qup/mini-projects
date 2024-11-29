const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {}, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: { background: "#202020" }, // dark theme colors
        },
        "purple-dark": {
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            background: "#0D001A",
            foreground: "#ffffff",
            primary: {
              50: "#3B096C",
              100: "#520F83",
              200: "#7318A2",
              300: "#9823C2",
              400: "#c031e2",
              500: "#DD62ED",
              600: "#F182F6",
              700: "#FCADF9",
              800: "#FDD5F9",
              900: "#FEECFE",
              DEFAULT: "#DD62ED",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
        coffee: {
          colors: {
            default: {
              50: "#151215",
              100: "#241f24",
              200: "#322b32",
              300: "#413841",
              400: "#6c656c",
              500: "#979297",
              600: "#c1bec1",
              700: "#ecebec",
              foreground: "#fff",
              DEFAULT: "#322b32",
            },
            primary: {
              50: "#472f18",
              100: "#785029",
              200: "#aa713a",
              300: "#db924b",
              400: "#e3ab74",
              500: "#ebc39c",
              600: "#f3dcc5",
              700: "#fbf4ed",
              foreground: "#000",
              DEFAULT: "#aa713a",
            },
            secondary: {
              50: "#1d2b2c",
              100: "#32494a",
              200: "#466668",
              300: "#5a8486",
              400: "#7fa0a1",
              500: "#a4bbbc",
              600: "#c9d7d8",
              700: "#eff3f3",
              foreground: "#fff",
              DEFAULT: "#466668",
            },
            success: {
              50: "#333b2c",
              100: "#56654a",
              200: "#7a8e69",
              300: "#9db787",
              400: "#b3c7a2",
              500: "#c9d7bd",
              600: "#dfe8d8",
              700: "#f5f8f3",
              foreground: "#000",
              DEFAULT: "#7a8e69",
            },
            warning: {
              50: "#53441f",
              100: "#8c7434",
              200: "#c6a34a",
              300: "#ffd25f",
              400: "#ffdc83",
              500: "#ffe6a7",
              600: "#fff0cb",
              700: "#fffbef",
              foreground: "#000",
              DEFAULT: "#c6a34a",
            },
            danger: {
              50: "#52302a",
              100: "#8b5247",
              200: "#c37364",
              300: "#fc9581",
              400: "#fdad9d",
              500: "#fdc5ba",
              600: "#feddd6",
              700: "#fff4f2",
              foreground: "#000",
              DEFAULT: "#c37364",
            },
            background: "#20161F",
            foreground: {
              50: "#40341f",
              100: "#6c5735",
              200: "#997b4a",
              300: "#c59f60",
              400: "#d2b584",
              500: "#dfcaa8",
              600: "#ece0cb",
              700: "#f9f5ef",
              foreground: "#000",
              DEFAULT: "#997b4a",
            },
            content1: {
              DEFAULT: "#2c1f2b",
              foreground: "#fff",
            },
            content2: {
              DEFAULT: "#3e2b3c",
              foreground: "#fff",
            },
            content3: {
              DEFAULT: "#50374d",
              foreground: "#fff",
            },
            content4: {
              DEFAULT: "#62435f",
              foreground: "#fff",
            },
            focus: "#db924b",
            overlay: "#ffffff",
            divider: "#ffffff",
          },
        },
        // More custom ...
      },
    }),
  ],
};
