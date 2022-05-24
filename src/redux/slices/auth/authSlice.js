/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import jsCookie from "js-cookie";

const initialState = {
  user: {},
};

const authSlice = createSlice({
  // el slice tendra nombre products, su valor inicial sera el valor inicial y sus reducers estan vacios
  name: "auth",
  initialState,
  reducers: {
    storeUserToken(state, action) {
      if (action.payload.data) {
        const { token, userId, userName } = action.payload.data;
        if (token && userId && userName) {
          state.user = { token, userId, userName };
          jsCookie.set("DTCTOKEN", token);
          jsCookie.set("DTCUSERID", userId);
        }
      }
    },
    removeUserToken(state) {
      state.user = {};
      jsCookie.remove("DTCTOKEN");
      jsCookie.remove("DTCUSERID");
      window.location = "/";
    },
  },
});

export const { storeUserToken, removeUserToken } = authSlice.actions; // exportamos de todas las el recevivedproducts para que pueda recibir los productos
export default authSlice.reducer; // exportamos el reducer.
