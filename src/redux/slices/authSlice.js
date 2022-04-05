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
      state.user.email = action.payload.email;
      state.user.name = action.payload.name;
      state.user.role = action.payload.role;
      state.user.addresses = action.payload.addresses;
      state.user.id = action.payload.id;
      jsCookie.set("EZPROLE", action.payload.role);
      jsCookie.set("EZPUSERID", action.payload.id);
      jsCookie.set("EZPAUTHTOKEN", action.payload.token.authToken);
      switch (state.user.role) {
        case "customer":
          window.location = "/products";
          break;
        case "pharmacist":
          window.location = "/approveprescription";
          break;
        case "admin":
          window.location = "/manageusers";
          break;
        default:
          window.location = "/login";
          break;
      }
    },
    removeUserToken(state) {
      state.user = {};
      jsCookie.remove("EZPAUTHTOKEN");
      jsCookie.remove("EZPUSERID");
      jsCookie.remove("EZPROLE");
      window.location = "/login";
    },
  },
});

export const { storeUserToken, removeUserToken } = authSlice.actions; // exportamos de todas las el recevivedproducts para que pueda recibir los productos
export default authSlice.reducer; // exportamos el reducer.
