import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character } from "../../../domain/models";

type CharactersStore = {
  characters: Character.Model[];
};

const initialState: CharactersStore = {
  characters: [],
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState: initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<Character.Model[]>) => {
      state.characters = action.payload;
    },
  },
});

export const selectCharacters = (state: any): Character.Model[] =>
  state.characters.characters;
