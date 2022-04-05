import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import jsCookie from 'js-cookie';

export const questionsAPI = createApi({
  reducerPath: "questionsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_API,
  }),
  endpoints: (builder) => ({
    getQuestionData: builder.query({
      query: ({ questionid }) => ({
        url: `/question/${questionid}`,
        method: "get",
        headers:{
          authorization:jsCookie.get("DTCTOKEN"),
          userId:jsCookie.get("DTCUSERID"),
        }
      })
    }),
    updateNumberTextQuestion: builder.mutation({
      query: ({ name, labelText, questionid }) => ({
        url: `/question/${questionid}`,
        method: "put",
        body: {
          name,
          labelText
        },
        headers:{
          authorization:jsCookie.get("DTCTOKEN"),
          userId:jsCookie.get("DTCUSERID"),
        }
      })
    }),
    postCreateQuestion: builder.mutation({
      query: ({ project, labelText, name, questionType }) => ({
        url: `/question`,
        method: "post",
        body: {
          name,
          labelText,
          questionType,
          project
        },
        headers:{
          authorization:jsCookie.get("DTCTOKEN"),
          userId:jsCookie.get("DTCUSERID"),
        }
      })
    }),
    postQuestionUp: builder.mutation({
      query: ({ projectid, order }) => ({
        url: `/question/edit/moveup`,
        method: "put",
        body: {
          projectId: projectid,
          order
        },
        headers:{
          authorization:jsCookie.get("DTCTOKEN"),
          userId:jsCookie.get("DTCUSERID"),
        }
      })
    }),
    postQuestionDown: builder.mutation({
      query: ({ projectid, order }) => ({
        url: `/question/edit/movedown`,
        method: "put",
        body: {
          projectId: projectid,
          order
        },
        headers:{
          authorization:jsCookie.get("DTCTOKEN"),
          userId:jsCookie.get("DTCUSERID"),
        }
      })
    }),
    deleteQuestion: builder.mutation({
      query: ({ projectId, questionId }) => ({
        url: `/question/delete`,
        method: "delete",
        body: {
          projectId,
          questionId
        },
        headers:{
          authorization:jsCookie.get("DTCTOKEN"),
          userId:jsCookie.get("DTCUSERID"),
        }
      })
    }),
  }),
});

export const { 
  usePostCreateQuestionMutation,
  usePostQuestionUpMutation,
  usePostQuestionDownMutation,
  useDeleteQuestionMutation,
  useGetQuestionDataQuery,
  useUpdateNumberTextQuestionMutation } =
  questionsAPI;
