import { createSlice } from "@reduxjs/toolkit";

type SidebarStore = {
  mobileOpen: boolean;
};

const initialState: SidebarStore = {
  mobileOpen: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: initialState,
  reducers: {
    toggle: (state) => {
      state.mobileOpen = !state.mobileOpen;
    },
  },
});

export const selectSidebar = (state: any): boolean => state.sidebar.mobileOpen;
