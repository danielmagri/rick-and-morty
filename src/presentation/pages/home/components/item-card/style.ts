import { styled, experimental_sx as sx } from "@mui/material";

export const ContainerStyle = styled("div")(
  sx({
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    bgcolor: "secondary.main",
    maxWidth: { xs: "180px", sm: "300px" },
    minWidth: "180px",
    width: { xs: "50%", sm: "25%" },
    borderRadius: "4px",
    margin: { xs: "4px", sm: "8px" },
    paddingBottom: "6px",
    color: "primary.contrastText",
    "*:hover": {
      cursor: "pointer",
    },
    "img:hover": {
      margin: "0px",
      borderRadius: "4px 4px 0px 0px",
      transition: "all 0.2s ease-in-out",
    },
    boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.3)",
  })
);

export const ImageStyle = styled("img")({
  display: "block",
  margin: "6px",
});

export const NameStyle = styled("label")({
  fontSize: 20,
  fontWeight: "bold",
  flexGrow: 1,
  textAlign: "center",
});

export const SpecieStyle = styled("label")({
  fontSize: 20,
  flexGrow: 1,
  textAlign: "center",
});

export const StatusStyle = styled("label")({
  fontSize: 20,
  flexGrow: 1,
  textAlign: "center",
});
