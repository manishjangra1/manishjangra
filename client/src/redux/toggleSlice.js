import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
    openMenu: (state) => {
      state.isOpen = true;
    },
  },
});

export const { toggleMenu, closeMenu, openMenu } = toggleSlice.actions;
export default toggleSlice.reducer;
