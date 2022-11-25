import { createTheme, NextUIProvider, Text } from "@nextui-org/react";

export const lightTheme = createTheme({
  type: "light", 
  theme: {
    colors: {

      primaryLight: "$orange200",
      primaryLightHover: "$orange300",
      primaryLightActive: "$orange400",
      primaryLightContrast: "$orange600",
      primary: "#ff0000",
      primaryBorder: "$orange500",
      primaryBorderHover: "$orange600",
      primarySolidHover: "$orange700",
      primarySolidContrast: "$white",
      primaryShadow: "$orange500",

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#f9f9f9",

  
      myColor: "#ff4ecd",

     
    },
    space: {},
    fonts: {},
  },
});
