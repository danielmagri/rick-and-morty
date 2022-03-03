import { Button } from "@mui/material";
import React from "react";
import { Failure } from "../../../core/models";
import { TitleStyle, ContainerStyle, DescriptionStyle } from "./style";

type FailureMessageProps = {
  error: Failure;
  onClickTryAgain?: () => void;
};

export const FailureMessage: React.FC<FailureMessageProps> = ({
  error,
  onClickTryAgain,
}) => {
  return (
    <ContainerStyle>
      <TitleStyle>Something went wrong :(</TitleStyle>
      <DescriptionStyle>{error.message}</DescriptionStyle>
      {onClickTryAgain && (
        <Button variant="contained" color="secondary" onClick={onClickTryAgain}>
          Try again
        </Button>
      )}
    </ContainerStyle>
  );
};
