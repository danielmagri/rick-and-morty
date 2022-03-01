import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SidebarStore = {
  mobileOpen: boolean;
  enabled: boolean;
};

const initialState: SidebarStore = {
  mobileOpen: false,
  enabled: true,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: initialState,
  reducers: {
    toggle: (state) => {
      state.mobileOpen = !state.mobileOpen;
    },
    setEnabled: (state, action: PayloadAction<boolean>) => {
      state.enabled = action.payload;
    },
  },
});

export const selectSidebar = (state: any): SidebarStore => state.sidebar;
