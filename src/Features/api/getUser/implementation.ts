import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { GetUserRequest, GetUserResponse } from './types/GetUser'
import { baseUrl } from '../../../Shared'

export const getUserApi = createApi({
  reducerPath: 'getUserApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUser: builder.query<GetUserResponse, GetUserRequest>({
      query: ({ id }) => `api/users/${id}`,
    }),
  }),
})

export const { useGetUserQuery } = getUserApi
