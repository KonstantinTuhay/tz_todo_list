import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
};

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_URL }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/todos",
      transformResponse: (response) => console.log(response), // Преобразование ответа
      onSuccess: (data) => console.log("Запрос успешен!", data), // Обработка успешного ответа
      onError: (error) => console.error("Произошла ошибка:", error), // Обработка ошибки
      providesTags: ["Tasks"], // Теги для кэширования
    }),
  }),
});

export const { useGetTasksQuery } = api;

export const toDoApi = createApi({
  reducerPath: "toDoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_URL,
  }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getToDos: builder.query({
      query: () => {
        return {
          url: `todos?isCompleted=false`,
          method: "GET",
          headers,
        };
      },
      providesTags: ["Todos"],
    }),
    createToDo: builder.mutation({
      query: (body) => {
        return {
          url: `todos`,
          method: "POST",
          headers,
          body: body,
        };
      },
      invalidatesTags: ["Todos"],
    }),
    deleteToDo: builder.mutation({
      query: (id) => {
        return {
          url: `todos/${id}`,
          method: "DELETE",
          headers,
        };
      },
      invalidatesTags: ["Todos"],
      transformResponse: (response, meta, arg) => response.data,
      transformErrorResponse: (response, meta, arg) => response.status,
    }),
  }),
});

export const {
  useGetToDosQuery,
  useCreateToDoMutation,
  useDeleteToDoMutation,
} = toDoApi;
