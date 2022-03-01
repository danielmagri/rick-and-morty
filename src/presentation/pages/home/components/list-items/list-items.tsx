import React from "react";
import { ItemCard } from "..";
import { Character } from "../../../../../domain/models";
import { ContainerStyle } from "./style";
import { useNavigate } from "react-router-dom";

type ListItemsProps = {
  list: Character.Model[];
};

export const ListItems: React.FC<ListItemsProps> = ({ list }) => {
  const navigate = useNavigate();

  const handleClickItem = (id: number): void => {
    navigate(`details/${id}`);
  };

  return (
    <ContainerStyle>
      {list.map((item) => (
        <ItemCard
          key={item.id}
          data={item}
          onClick={() => handleClickItem(item.id)}
        />
      ))}
    </ContainerStyle>
  );
};
