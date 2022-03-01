import React from "react";
import { Failure } from "../../../core/models";

type FailureMessageProps = {
  error: Failure;
};

export const FailureMessage: React.FC<FailureMessageProps> = ({ error }) => {
  return <label>{error.message}</label>;
};
