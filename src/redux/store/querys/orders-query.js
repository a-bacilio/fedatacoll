/* eslint-disable no-labels */
/* eslint-disable no-unused-labels */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import jsCookie from "js-cookie";

export const ordersAPI = createApi({
  reducerPath: "ordersAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_API,
  }),
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: () => ({
        url: "/mycarts",
        method: "get",
        headers: {
          Authorization: jsCookie.get("EZPAUTHTOKEN"),
          userid: jsCookie.get("EZPUSERID"),
        },
      }),
      transformResponse: (response) =>
        response.map((cart) => ({
          ...cart,
          id: cart._id,
          deliveryDate: cart.deliveryDate ?? "",
          products: cart.products.map((product) => ({
            ...product._id,
            quantity: product.quantity,
          })),
        })),
    }),
  }),
});

export const { useGetAllOrdersQuery } = ordersAPI;
