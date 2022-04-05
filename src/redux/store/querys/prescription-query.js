/* eslint-disable no-underscore-dangle */
import { createSelector } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import jsCookie from "js-cookie";

export const prescriptionAPI = createApi({
  reducerPath: "prescriptionAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_API,
  }),
  endpoints: (builder) => ({
    getMyPrescriptions: builder.query({
      query: () => ({
        url: "/myprescriptions",
        method: "get",
        headers: {
          Authorization: jsCookie.get("EZPAUTHTOKEN"),
          userid: jsCookie.get("EZPUSERID"),
        },
      }),
      transformResponse: (response) => {
        const allPrescs = response.map((cart) => ({
          ...cart,
          id: cart._id,
          deliveryDate: cart.deliveryDate ?? "",
          products: cart.products.map((product) => ({
            ...product._id,
            quantity: product.quantity,
          })),
        }));
        const returnObject = {
          notReviewedCarts: allPrescs.filter(
            (cart) => cart.state === "not reviewed"
          ),
          approvedCarts: allPrescs.filter((cart) => cart.state === "approved"),
          pendingCarts: allPrescs.filter((cart) => cart.state === "pending"),
          orderedCarts: allPrescs.filter((cart) => cart.state === "ordered"),
          notApprovedCarts: allPrescs.filter(
            (cart) => cart.state === "not approved"
          ),
        };
        return returnObject;
      },
    }),
    postCreatePrescription: builder.mutation({
      query: ({ user, products, state, type }) => ({
        url: "/carts",
        method: "post",
        body: {
          user,
          products,
          state,
          type,
        },
        headers: {
          Authorization: jsCookie.get("EZPAUTHTOKEN"),
          userid: jsCookie.get("EZPUSERID"),
        },
      }),

      transformResponse: (response) => response,
    }),
    postPayPrescription: builder.mutation({
      query: (precriptionId) => ({
        url: "/payprescription",
        method: "post",
        body: {
          prescriptionId: precriptionId,
        },
        headers: {
          Authorization: jsCookie.get("EZPAUTHTOKEN"),
          userid: jsCookie.get("EZPUSERID"),
        },
      }),

      transformResponse: (response) => response,
    }),
  }),
});

export const {
  useGetMyPrescriptionsQuery,
  usePostCreatePrescriptionMutation,
  usePostPayPrescriptionMutation,
} = prescriptionAPI;

export const getPrePrescription = createSelector(
  (state) =>
    state.persistedReducer.prescription[jsCookie.get("EZPUSERID")] || {},
  (items) => ({
    user: jsCookie.get("EZPUSERID"),
    type: "prescription",
    state: "not reviewed",
    products: Object.values(items).map((item) => ({
      _id: item.id,
      quantity: item.quantity,
    })),
  })
);
