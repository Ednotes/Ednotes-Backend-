// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
// 2. Call `extendTheme` and pass your custom values
const customTheme = extendTheme({
  colors: {
    brand: {
      50: "#dff7ff",
      100: "#b3e5ff",
      200: "#85d3fd",
      300: "#58c1fb",
      400: "#36affa",
      500: "#003049",
      600: "#1b75af",
      700: "#0e547e",
      800: "#00324d",
      900: "#00121d",
    },

    primary: {
      50: "#dff7ff",
      100: "#b3e5ff",
      200: "#85d3fd",
      300: "#58c1fb",
      400: "#36affa",
      500: "#003049",
      600: "#1b75af",
      700: "#0e547e",
      800: "#00324d",
      900: "#00121d",
    },
  },

  styles: {
    global: (props) => ({
      body: {
        fontFamily: "Poppins",
      },
    }),
  },
});

export default customTheme;
