import { MD3LightTheme as DefaultTheme } from "react-native-paper";

type ThemeInterface = typeof DefaultTheme;

export const theme: ThemeInterface = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FF0000",
    secondary: "#5D88C1",
    tertiary: "#4BAB4F",
  },
};
