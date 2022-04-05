/* eslint-disable no-labels */
/* eslint-disable no-unused-labels */
/* eslint-disable no-restricted-syntax */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import jsCookie from "js-cookie";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_API,
    refetchOnMountOrArgChange: 30,
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
      transformResponse: (response) => response,
    }),
    postCreateProducts: builder.mutation({
      query: ({
        name,
        price,
        stock,
        image_url,
        description,
        category,
        prescription,
      }) => ({
        url: "/products",
        method: "post",
        body: {
          name,
          price,
          stock,
          image_url,
          description,
          category,
          prescription,
        },
        headers: {
          Authorization: jsCookie.get("EZPAUTHTOKEN"),
          userid: jsCookie.get("EZPUSERID"),
        },
      }),
      transformResponse: (respose) => respose.data,
    }),
  }),
});

export const { useGetAllProductsQuery, usePostCreateProductsMutation } =
  productsApi;
