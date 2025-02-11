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
      QuestionsTypes.GetQuestionsResponse['data']['data'],
      QuestionsTypes.GetQuestionsRequest
    >({
      query: ({page, limit}) =>
        `questions?page=${page}&limit=${limit}&sortBy=id:ASC`,
      providesTags: (result) => {
        if (!result) {
          return ['Questions']
        }
        return [
          ...result.map(({id}) => ({type: 'Question' as const, id})),
          {type: 'Questions'},
        ]
      },
      transformResponse: (response: QuestionsTypes.GetQuestionsResponse) => {
        return response['data']['data']
      },
    }),
    getQuestion: builder.query<
      QuestionsTypes.GetQuestionResponse,
      QuestionsTypes.GetQuestionRequest
    >({
      query: ({id}) => `questions/${id}`,
      providesTags: (result) => {
        if (!result) {
          return []
        }
        return [{type: 'Question', id: result.data.id}]
      },
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
      invalidatesTags: (_result, err, args) => {
        if (err) {
          return []
        }
        return [{type: 'Question', id: args.id}]
      },
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
