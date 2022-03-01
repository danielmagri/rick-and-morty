import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character, Pagination } from "../../../domain/models";

type CharactersStore = {
  characters: Character.Model[];
  pagination: Pagination.Info;
  currentPage: number;
  filters: Filters;
};

type Filters = {
  name: string | undefined;
  status: Character.StatusType | undefined;
  gender: Character.GenderType | undefined;
};

const initialState: CharactersStore = {
  characters: [],
  pagination: {
    count: 0,
    pages: 0,
  },
  currentPage: 1,
  filters: {
    name: undefined,
    status: undefined,
    gender: undefined,
  },
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
    setNameFilter: (state, action: PayloadAction<string | undefined>) => {
      state.filters.name = action.payload;
      state.currentPage = 1;
    },
    setStatusFilter: (
      state,
      action: PayloadAction<Character.StatusType | undefined>
    ) => {
      state.filters.status = action.payload;
      state.currentPage = 1;
    },
    setGenderFilter: (
      state,
      action: PayloadAction<Character.GenderType | undefined>
    ) => {
      state.filters.gender = action.payload;
      state.currentPage = 1;
    },
  },
});

export const selectCharacters = (state: any): Character.Model[] =>
  state.characters.characters;

export const selectPagination = (state: any): Pagination.Info =>
  state.characters.pagination;

export const selectCurrentPage = (state: any): number =>
  state.characters.currentPage;

export const selectFilter = (state: any): Filters => state.characters.filters;
