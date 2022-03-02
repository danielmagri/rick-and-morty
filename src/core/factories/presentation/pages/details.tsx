import { DetailsPage } from "../../../../presentation/pages/details";
import { makeGetEpisodes } from "../../domain";

export const makeDetailsPage = (): JSX.Element => {
  return <DetailsPage getEpisodes={makeGetEpisodes()} />;
};
