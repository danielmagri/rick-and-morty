import { styled } from "@mui/material";

export const LogoStyle = styled("img")(({ theme }) => ({
  height: 60,
  width: 'auto',
  objectFit: 'contain',
  backgroundColor: theme.palette.primary.main,
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
}));
