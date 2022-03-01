import { styled } from "@mui/material";

export const ContainerStyle = styled("div")({
  display: "flex",
  flexDirection: "column",
  background: "red",
  width: 300,
  minHeight: 300,
  borderRadius: 4,
  margin: 8,
});

export const ImageStyle = styled("img")({
  display: "block",
  width: 288,
  marginTop: 6,
  marginLeft: "auto",
  marginRight: "auto",
});

export const NameStyle = styled("label")({
  fontSize: 20,
  flexGrow: 1,
  textAlign: "center",
  ":hover": {
    cursor: "pointer",
  },
});

export const SpecieStyle = styled("label")({
  fontSize: 20,
  flexGrow: 1,
  textAlign: "center",
  ":hover": {
    cursor: "pointer",
  },
});

export const StatusStyle = styled("label")({
  fontSize: 20,
  flexGrow: 1,
  textAlign: "center",
  ":hover": {
    cursor: "pointer",
  },
});
