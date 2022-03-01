import { useState, useEffect } from "react";
import { Pagination, Box, Fab } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPagination,
  charactersSlice,
  selectCharacters,
  selectCurrentPage,
  selectFilter,
} from "../../../core/context";
import { GetCharacters } from "../../../domain/usecases";
import { ItemCard } from "./components";
import { CharactersGridStyle } from "./style";

type HomePageProps = {
  getCharacters: GetCharacters;
};

export const HomePage: React.FC<HomePageProps> = ({ getCharacters }) => {
  const characters = useSelector(selectCharacters);
  const filter = useSelector(selectFilter);
  const pagination = useSelector(selectPagination);
  const currentPage = useSelector(selectCurrentPage);

  const [showUpButton, setShowUpButton] = useState(false);

  const dispatch = useDispatch();

  const fetchData = () => {
    getCharacters
      .get({
        page: currentPage,
        name: filter.name,
        gender: filter.gender,
        status: filter.status,
      })
      .then((data) => dispatch(charactersSlice.actions.setCharacters(data)))
      .catch((error) => console.log(error));
  };

  const handleScrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, filter]);

  useEffect(() => {
    const listener = () => {
      const limit = window.innerHeight / 2;
      if (window.scrollY > limit && !showUpButton) {
        setShowUpButton(true);
      } else if (window.scrollY < limit && showUpButton) {
        setShowUpButton(false);
      }
    };

    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, [showUpButton]);

  return (
    <>
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
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleScrollToTop}
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          display: showUpButton ? "inline" : "none",
        }}
      >
        <ArrowUpward />
      </Fab>
    </>
  );
};
