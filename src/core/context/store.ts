import { configureStore } from "@reduxjs/toolkit";
import { sidebarSlice, charactersSlice } from "./reducers";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
    characters: charactersSlice.reducer,
  },
});
