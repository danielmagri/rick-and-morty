import { configureStore } from "@reduxjs/toolkit";
import { sidebarSlice } from "./reducers";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
  },
});
