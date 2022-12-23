import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Lora', serif`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    coral: {
      100: "rgb(260, 90, 120)",
      200: "rgb(240, 72, 100)",
      300: "rgb(230, 40, 90)",
      400: "rgb(220, 35, 85)",
      500: "rgb(214, 28, 78)",
      600: "rgb(200, 20, 70)",
      700: "rgb(190, 15, 65)",
      800: "rgb(180,10, 60)",
    },
  },
});

export default theme;
