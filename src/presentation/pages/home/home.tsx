import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { charactersSlice, selectCharacters } from "../../../core/context";
import { GetCharacters } from "../../../domain/usecases";
import { ItemCard } from "./components";
import { CharactersGridStyle } from "./style";

type HomePageProps = {
  getCharacters: GetCharacters;
};

export const HomePage: React.FC<HomePageProps> = ({ getCharacters }) => {
  const characters = useSelector(selectCharacters);
  const dispatch = useDispatch();

  const fetchData = () => {
    getCharacters
      .get()
      .then((data) =>
        dispatch(charactersSlice.actions.setCharacters(data.results))
      )
      .catch((error) => console.log(error));
  };

  // useEffect(() => {
  //   fetchData();
  // });

  return (
    <>
      <button onClick={fetchData}>Load</button>
      <CharactersGridStyle>
        {characters?.map((item) => (
          <ItemCard key={item.id} data={item} />
        ))}
      </CharactersGridStyle>
    </>
  );
};
