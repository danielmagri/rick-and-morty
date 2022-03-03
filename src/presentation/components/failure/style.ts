import { styled, experimental_sx as sx } from "@mui/material";

export const ContainerStyle = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: 'center',
  marginTop: '64px',
});

export const TitleStyle = styled("label")(
  sx({
    fontSize: 30,
    fontWeight: "bold",
    color: "primary.contrastText",
  })
);

export const DescriptionStyle = styled("label")(
  sx({
    fontSize: 24,
    marginTop: '12px',
    marginBottom: '12px',
    color: "primary.contrastText",
  })
);
