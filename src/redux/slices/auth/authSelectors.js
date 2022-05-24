import { createDraftSafeSelector } from "@reduxjs/toolkit";

const selectSelf = (state) => state.persistedReducer.auth.user;

export const tokenSelector = createDraftSafeSelector(
  selectSelf,
  (state) => state.token
);

export const userSelector = createDraftSafeSelector(
  selectSelf,
  (state) => state
);
