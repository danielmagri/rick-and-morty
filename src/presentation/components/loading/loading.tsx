import React from "react";
import { CircularProgress, Box, SxProps, Theme } from "@mui/material";

type LoadingProps = {
  containerSx?: SxProps<Theme> | undefined;
  size?: number
};

export const Loading: React.FC<LoadingProps> = ({ containerSx, size = 40 }) => {
  return (
    <Box
      sx={{
        ...containerSx,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
      }}
    >
      <CircularProgress color="secondary" size={size}/>
    </Box>
  );
};
