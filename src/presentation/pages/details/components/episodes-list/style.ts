import { styled, experimental_sx as sx } from "@mui/material";

export const ContainerStyle = styled("div")(
  sx({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: "24px",
    marginBottom: "32px",
  })
);

export const EpisodeContainerStyle = styled("div")(
  sx({
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    marginTop: "16px",
    padding: "32px",
    backgroundColor: "background.paper",
    borderRadius: "4px",
  })
);

export const EpisodeLabelContainerStyle = styled("div")({
  display: "flex",
  marginBottom: "6px",
});

export const EpisodeTitleStyle = styled("label")(
  sx({
    fontSize: 20,
    fontWeight: "bold",
    flexGrow: 1,
    textAlign: "center",
    color: "secondary.main",
    marginRight: "8px",
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
