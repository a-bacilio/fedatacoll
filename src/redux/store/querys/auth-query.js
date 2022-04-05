import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_API,
  }),
  endpoints: (builder) => ({
    postLoginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: "/login",
        method: "post",
        body: {
          email,
          password,
        },
      }),
      transformResponse: (response) => response,
    }),
    postRegisterUser: builder.mutation({
      query: ({ name,email, password,passwordConfirmation }) => ({
        url: "/signup",
        method: "post",
        body: {
          name,
          email,
          password,
          passwordConfirmation
        },
      }),
      transformResponse: (response) => response,
    }),
    postEmailTokenValidation: builder.query({
      query: ({ token }) => ({
        url: "/emailtokenvalidation",
        method: "post",
        body: {
          token,
        },
      }),
      transformResponse: (response) => response,
    }),
  }),
});

export const { usePostLoginUserMutation, usePostEmailTokenValidationQuery,usePostRegisterUserMutation } =
  authAPI;
