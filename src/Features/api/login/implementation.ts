import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { UserForLogRequest, UserForLogResponse } from './types/UserForLog'
import { baseUrl } from '../../../Shared'

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    login: builder.mutation<UserForLogResponse, UserForLogRequest>({
      query: (data) => ({
        url: `api/auth/login`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const { useLoginMutation } = loginApi
