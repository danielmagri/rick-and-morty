import { useState, useEffect } from "react";
import { Pagination, Box, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPagination,
  charactersSlice,
  selectCharacters,
  selectCurrentPage,
  selectFilter,
} from "../../../core/context";
import { GetCharacters } from "../../../domain/usecases";
import { ListItems } from "./components";
import { handleEither } from "../../../core/models";
import { FailureMessage, GoTopButton, Loading } from "../../components";

type HomePageProps = {
  getCharacters: GetCharacters;
};

export const HomePage: React.FC<HomePageProps> = ({ getCharacters }) => {
  const characters = useSelector(selectCharacters);
  const filter = useSelector(selectFilter);
  const pagination = useSelector(selectPagination);
  const currentPage = useSelector(selectCurrentPage);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const dispatch = useDispatch();

  const fetchData = () => {
    setLoading(true);
    setError(undefined);

    getCharacters
      .get({
        page: currentPage,
        name: filter.name,
        gender: filter.gender,
        status: filter.status,
      })
      .then((either) =>
        handleEither(
          either,
          (data) => {
            dispatch(charactersSlice.actions.setData(data));
          },
          setError
        )
      )
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, filter]);

  return (
    <>
      <Stack>
        {error !== undefined && (
          <FailureMessage error={error} onClickTryAgain={fetchData} />
        )}

        {!loading && error === undefined && <ListItems list={characters} />}
        {pagination.pages !== 0 && error === undefined && !loading && (
          <Pagination
            count={pagination.pages}
            page={currentPage}
            onChange={(_event, page) => {
              dispatch(charactersSlice.actions.setCurrentPage(page));
            }}
            variant="outlined"
            shape="rounded"
            size="large"
            sx={{
              marginBottom: "24px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        )}
      </Stack>
      {loading && (
        <Loading
          containerSx={{
            marginTop: "50px",
            height: "100%",
            flexGrow: 1,
          }}
          size={80}
        />
      )}
      <GoTopButton />
    </>
  );
};
