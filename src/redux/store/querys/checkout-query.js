import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import jsCookie from "js-cookie";

export const checkoutAPI = createApi({
  reducerPath: "checkoutAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_API,
  }),
  endpoints: (builder) => ({
    postPayCart: builder.mutation({
      query: ({ user, products }) => ({
        url: "/paycart",
        method: "post",
        body: {
          user,
          products,
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

export const { usePostPayCartMutation } = checkoutAPI;
