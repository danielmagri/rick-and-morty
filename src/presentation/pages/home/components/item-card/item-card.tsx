import React from "react";
import { Character } from "../../../../../domain/models";
import {
  ContainerStyle,
  ImageStyle,
  NameStyle,
  SpecieStyle,
  StatusStyle,
} from "./style";

type ItemCardProps = {
  data: Character.Model;
  onClick?: () => void;
};

export const ItemCard: React.FC<ItemCardProps> = ({ data, onClick }) => {
  return (
    <ContainerStyle onClick={onClick}>
      <ImageStyle src={data.image} />
      <NameStyle>{data.name}</NameStyle>
      <SpecieStyle>{data.species}</SpecieStyle>
      <StatusStyle>{data.status}</StatusStyle>
    </ContainerStyle>
  );
};
