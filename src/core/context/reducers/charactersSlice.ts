import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character, Pagination } from "../../../domain/models";

type CharactersStore = {
  characters: Character.Model[];
  pagination: Pagination.Info;
  currentPage: number;
};

const initialState: CharactersStore = {
  characters: [],
  pagination: {
    count: 0,
    pages: 0,
  },
  currentPage: 1,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState: initialState,
  reducers: {
    setCharacters: (
      state,
      action: PayloadAction<Pagination.Model<Character.Model>>
    ) => {
      state.characters = action.payload.results;
      state.pagination = action.payload.info;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const selectCharacters = (state: any): Character.Model[] =>
  state.characters.characters;

export const selectPagination = (state: any): Pagination.Info =>
  state.characters.pagination;

export const selectCurrentPage = (state: any): number =>
  state.characters.currentPage;
