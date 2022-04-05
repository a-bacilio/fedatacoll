/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import { createSelector, createSlice } from "@reduxjs/toolkit";
import jsCookie from "js-cookie";

const initialState = {};

const cartSlice = createSlice({
  // el slice tendra nombre products, su valor inicial sera el valor inicial y sus reducers estan vacios
  name: "cart",
  initialState,
  reducers: {
    initCart(state) {
      if (!jsCookie.get("EZPUSERID")) throw new Error("No hay userid");
      if (!jsCookie.get("EZPAUTHTOKEN")) throw new Error("No hay auth token");
      const userid = jsCookie.get("EZPUSERID");
      if (!state[userid]) {
        state[userid] = {};
      }
    },
    addProductToCart(state, action) {
      if (!jsCookie.get("EZPUSERID")) throw new Error("No hay userid");
      if (!jsCookie.get("EZPAUTHTOKEN")) throw new Error("No hay auth token");
      const userid = jsCookie.get("EZPUSERID");
      const item = action.payload;
      if (!state[userid]) {
        state[userid] = {};
      }
      if (!state[userid][item._id]) {
        state[userid][item._id] = {
          quantity: 1,
          id: item._id,
          name: item.name,
          description: item.description,
          price: item.price,
          image_url: item.image_url,
        };
      } else {
        state[userid][item._id].quantity += 1;
      }
    },
    removeProductfromCart(state, action) {
      if (!jsCookie.get("EZPUSERID")) throw new Error("No hay userid");
      if (!jsCookie.get("EZPAUTHTOKEN")) throw new Error("No hay auth token");
      const userid = jsCookie.get("EZPUSERID");
      const itemId = action.payload;
      if (state[userid][itemId]) {
        if (state[userid][itemId].quantity > 1) {
          state[userid][itemId].quantity -= 1;
        } else {
          delete state[userid][itemId];
        }
      }
    },
    cleanCart(state) {
      if (!jsCookie.get("EZPUSERID")) throw new Error("No hay userid");
      if (!jsCookie.get("EZPAUTHTOKEN")) throw new Error("No hay auth token");
      const userid = jsCookie.get("EZPUSERID");
      delete state[userid];
    },
  },
});

export const { addProductToCart, removeProductfromCart, cleanCart, initCart } =
  cartSlice.actions; // exportamos de todas las el recevivedproducts para que pueda recibir los productos
export default cartSlice.reducer; // exportamos el reducer.

export const getTotalPrice = createSelector(
  (state) => state.persistedReducer.cart[jsCookie.get("EZPUSERID")] || {},
  (items) => {
    let total = 0;
    Object.values(items).forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  }
);

export const getPrePreference = createSelector(
  (state) => state.persistedReducer.cart[jsCookie.get("EZPUSERID")] || {},
  (items) => ({
    user: jsCookie.get("EZPUSERID"),
    products: Object.values(items).map((item) => ({
      _id: item.id,
      quantity: item.quantity,
    })),
  })
);
