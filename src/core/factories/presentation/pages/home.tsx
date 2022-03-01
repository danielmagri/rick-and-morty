import { HomePage } from "../../../../presentation/pages/home";
import { makeGetCharacters } from "../../domain";

export const makeHomePage = (): JSX.Element => {
  return <HomePage getCharacters={makeGetCharacters()} />;
};
