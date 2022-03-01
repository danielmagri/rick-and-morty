import React from "react";
import { ItemCard } from "..";
import { Character } from "../../../../../domain/models";
import { ContainerStyle } from "./style";

type ListItemsProps = {
  list: Character.Model[];
};

export const ListItems: React.FC<ListItemsProps> = ({ list }) => {
  return (
    <ContainerStyle>
      {list.map((item) => (
        <ItemCard key={item.id} data={item} />
      ))}
    </ContainerStyle>
  );
};
