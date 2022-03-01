import { useEffect } from "react";
import { Pagination, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPagination,
  charactersSlice,
  selectCharacters,
  selectCurrentPage,
} from "../../../core/context";
import { GetCharacters } from "../../../domain/usecases";
import { ItemCard } from "./components";
import { CharactersGridStyle } from "./style";

type HomePageProps = {
  getCharacters: GetCharacters;
};

export const HomePage: React.FC<HomePageProps> = ({ getCharacters }) => {
  const characters = useSelector(selectCharacters);
  const pagination = useSelector(selectPagination);
  const currentPage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();

  const fetchData = () => {
    getCharacters
      .get({
        page: currentPage,
      })
      .then((data) => dispatch(charactersSlice.actions.setCharacters(data)))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  return (
    <Box sx={{ alignContent: "center" }}>
      <CharactersGridStyle>
        {characters?.map((item) => (
          <ItemCard key={item.id} data={item} />
        ))}
      </CharactersGridStyle>
      {pagination.pages !== 0 && (
        <Pagination
          count={pagination.pages}
          page={currentPage}
          onChange={(_event, page) => {
            dispatch(charactersSlice.actions.setCurrentPage(page));
          }}
          variant="outlined"
          shape="rounded"
          size="large"
        />
      )}
    </Box>
  );
};
