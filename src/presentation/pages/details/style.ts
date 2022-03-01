import { styled, experimental_sx as sx } from "@mui/material";

export const ContainerStyle = styled("div")(
  sx({
    display: "flex",
    flexDirection: "column",
    width: { xs: "100%", sm: "75%" },
    alignItems: "start",
    marginTop: 2,
    marginLeft: "auto",
    marginRight: "auto",
  })
);

export const ImageStyle = styled("img")({
  display: "block",
  flexGrow: 1,
  marginTop: 6,
});

export const LabelStyle = styled("label")({
  fontSize: 20,
  flexGrow: 1,
  textAlign: "center",
  ":hover": {
    cursor: "pointer",
  },
});
