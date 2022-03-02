import React from "react";
import { CircularProgress, Box, SxProps, Theme } from "@mui/material";

type LoadingProps = {
  containerSx?: SxProps<Theme> | undefined;
};

export const Loading: React.FC<LoadingProps> = ({ containerSx }) => {
  return (
    <Box
      sx={{
        ...containerSx,
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <CircularProgress color="secondary" />
    </Box>
  );
};
