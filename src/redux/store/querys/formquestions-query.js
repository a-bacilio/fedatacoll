import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import jsCookie from "js-cookie";

export const formquestionsAPI = createApi({
  reducerPath: "formquestionsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_API,
  }),
  endpoints: (builder) => ({
    getFormQuestionData: builder.query({
      query: ({ projectid = "" }) => ({
        url: `/formquestions/${projectid}`,
        method: "get",
      }),
    }),
  }),
});

export const { useGetFormQuestionDataQuery } = formquestionsAPI;
