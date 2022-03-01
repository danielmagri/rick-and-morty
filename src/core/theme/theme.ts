import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f15b23",
      contrastText: "#000",
    },
    secondary: {
      main: "#29aae2",
    },
    text: {
      primary: "#000",
      secondary: "#000",
      disabled: "#ffffffa0",
    },
  },
});
