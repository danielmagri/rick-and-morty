import { styled, experimental_sx as sx } from "@mui/material";

export const ContainerStyle = styled("div")(
  sx({
    display: "flex",
    flexDirection: "column",
    width: { xs: "100%", sm: "60%" },
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

export const TitleStyle = styled("label")(
  sx({
    fontSize: 20,
    fontWeight: 'bold',
    flexGrow: 1,
    textAlign: "center",
    color: "secondary.main",
  })
);

export const LabelStyle = styled("label")(
  sx({
    fontSize: 20,
    flexGrow: 1,
    textAlign: "center",
    color: "primary.contrastText",
  })
);
