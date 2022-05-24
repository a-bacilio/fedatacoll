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
    postRegister: builder.mutation({
      query: ({ projectid = "", submitData }) => ({
        url: `/formquestions/${projectid}`,
        method: "post",
        body: { data: submitData },
      }),
    }),
    getAllRegisters: builder.query({
      query: ({ projectid = "" }) => ({
        url: `/registers/${projectid}`,
        method: "get",
        headers: {
          authorization: jsCookie.get("DTCTOKEN"),
          userId: jsCookie.get("DTCUSERID"),
        },
      }),
      transformResponse: (response) => {
        return response;
      },
    }),
    getAllGraphs: builder.query({
      query: ({ projectid = "" }) => ({
        url: `/graphs/${projectid}`,
        method: "get",
        headers: {
          authorization: jsCookie.get("DTCTOKEN"),
          userId: jsCookie.get("DTCUSERID"),
        },
      }),
      transformResponse: (response) => {
        return response;
      },
    }),
  }),
});

export const {
  useGetFormQuestionDataQuery,
  usePostRegisterMutation,
  useGetAllRegistersQuery,
  useGetAllGraphsQuery,
} = formquestionsAPI;
