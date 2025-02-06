import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import type {QuestionsTypes} from './types/Questions'

import {baseUrl} from '../../constants'

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: 'include',
  }),

  tagTypes: ['Questions', 'Question'],
  endpoints: (builder) => ({
    getQuestions: builder.query<
      QuestionsTypes.GetQuestionsResponse,
      QuestionsTypes.GetQuestionsRequest
    >({
      query: ({page, limit}) =>
        `questions?page=${page}&limit=${limit}&sortBy=id:ASC`,
      providesTags: ['Questions'],
    }),
    getQuestion: builder.query<
      QuestionsTypes.GetQuestionResponse,
      QuestionsTypes.GetQuestionRequest
    >({
      query: ({id}) => `questions/${id}`,
      providesTags: ['Question'],
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
      invalidatesTags: ['Questions'],
    }),
    editQuestion: builder.mutation<
      QuestionsTypes.EditQuestionResponse,
      QuestionsTypes.EditQuestionRequest
    >({
      query: ({id, ...data}) => ({
        url: `questions/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Questions', 'Question'],
    }),
  }),
})

export const {
  useGetQuestionQuery,
  useLazyGetQuestionQuery,
  useGetQuestionsQuery,
  useLazyGetQuestionsQuery,
  useCreateQuestionMutation,
  useEditQuestionMutation,
} = questionsApi
