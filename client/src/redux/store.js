import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import toggleReducer from "./toggleSlice";
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    toggle: toggleReducer,
    theme: themeReducer,
  },
});
