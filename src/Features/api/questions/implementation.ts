import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { QuestionsTypes } from './types/Questions'

import { baseUrl } from '../../../Shared'

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: 'include',
  }),

  tagTypes: ['User', 'MeData', 'IsMeAuth'],
  endpoints: (builder) => ({
    getQuestions: builder.query<
      QuestionsTypes.GetQuestionsResponse,
      QuestionsTypes.GetQuestionsRequest
    >({
      query: ({ page, limit }) =>
        `questions?page=${page}&limit=${limit}&sortBy=id:ASC`,
      providesTags: ['User'],
    }),
    getQuestion: builder.query<
      QuestionsTypes.GetQuestionResponse,
      QuestionsTypes.GetQuestionRequest
    >({
      query: ({ id }) => `questions/${id}`,
      providesTags: ['User'],
    }),
    createQuestion: builder.mutation<
      QuestionsTypes.CreateQuestionResponse,
      QuestionsTypes.CreateQuestionRequest
    >({
      query: (data) => ({
        url: `questions`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['User'],
    }),
  }),
})

export const {
  useGetQuestionQuery,
  useGetQuestionsQuery,
  useCreateQuestionMutation,
} = questionsApi
