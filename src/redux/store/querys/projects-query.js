import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import jsCookie from "js-cookie";

export const projectsAPI = createApi({
  reducerPath: "projectsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_API,
  }),
  endpoints: (builder) => ({
    getMyProjects: builder.query({
      query: () => ({
        url: `/project/user/${jsCookie.get("DTCUSERID")}`,
        method: "get",
        headers: {
          authorization: jsCookie.get("DTCTOKEN"),
          userId: jsCookie.get("DTCUSERID"),
        },
      }),
      transformResponse: (response) => response,
    }),
    getOneProject: builder.query({
      query: ({ projectid }) => ({
        url: `/project/${projectid}`,
        method: "get",
        headers: {
          authorization: jsCookie.get("DTCTOKEN"),
          userId: jsCookie.get("DTCUSERID"),
        },
      }),
      transformResponse: (response) => response,
    }),
    postCreateProject: builder.mutation({
      query: ({ name }) => ({
        url: `/project`,
        method: "post",
        body: {
          name,
          user: jsCookie.get("DTCUSERID"),
        },
        headers: {
          authorization: jsCookie.get("DTCTOKEN"),
          userId: jsCookie.get("DTCUSERID"),
        },
      }),
      transformResponse: (response) => response,
    }),
    deleteProject: builder.mutation({
      query: (projectid) => ({
        url: `/project`,
        method: "delete",
        body: {
          id: projectid,
        },
        headers: {
          authorization: jsCookie.get("DTCTOKEN"),
          userId: jsCookie.get("DTCUSERID"),
        },
      }),
      transformResponse: (response) => response,
    }),
    postColaboratorToken: builder.mutation({
      query: (projectId) => ({
        url: "/colaboratortoken",
        method: "post",
        body: {
          projectId,
        },
        headers: {
          authorization: jsCookie.get("DTCTOKEN"),
          userId: jsCookie.get("DTCUSERID"),
        },
      }),
      transformResponse: (response) => response,
    }),
  }),
});

export const {
  useGetMyProjectsQuery,
  usePostCreateProjectMutation,
  useGetOneProjectQuery,
  usePostCreateQuestionMutation,
  useDeleteProjectMutation,
  usePostColaboratorTokenMutation,
} = projectsAPI;
