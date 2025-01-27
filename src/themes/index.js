import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "system",
  useSystemColorMode: false,
  colors: {
    brand: {
      100: "#E9EFFF",
      300: "#485b99",
      500: "#1D3972",
    },
    secondary: {
      500: "#D2A517",
    },
  },
  fonts: {
    heading: "'Unbounded', sans-serif",
    body: "'Plus Jakarta Sans', sans-serif",
  },
});

export default theme;
