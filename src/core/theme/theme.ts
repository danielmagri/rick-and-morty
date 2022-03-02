import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0c13b3",
      paper: "#333bed",
    },
    primary: {
      main: "#1820D3",
      contrastText: "#fff",
    },
    secondary: {
      main: "#F55BAF",
      contrastText: "#fff",
    },
    text: {
      primary: "#fff",
      secondary: "#fff",
      disabled: "#ffffffa0",
    },
  },
});
