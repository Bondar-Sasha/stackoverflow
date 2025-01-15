import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { UserForRegRequest, UserForRegResponse } from './types/UserForReg'
import { baseUrl } from '../../../Shared'

export const registrationApi = createApi({
  reducerPath: 'registrationApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    register: builder.mutation<UserForRegResponse, UserForRegRequest>({
      query: (data) => ({
        url: `api/register`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const { useRegisterMutation } = registrationApi
