import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { MeTypes } from './types/Me'
import type { UserTypes } from './types/User'
import type { AuthTypes } from './types/Auth'
import { baseUrl } from '../../../Shared'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUsers: builder.query<
      UserTypes.GetUsersResponse,
      UserTypes.GetUsersRequest
    >({
      query: ({ page, limit }) => `users?page=${page}&limit=${limit}`,
    }),
    getUser: builder.query<UserTypes.GetUserResponse, UserTypes.GetUserRequest>(
      {
        query: ({ id }) => `users/${id}`,
      }
    ),
    patchUser: builder.mutation<
      UserTypes.PatchUserResponse,
      UserTypes.PatchUserRequest
    >({
      query: ({ id, ...data }) => ({
        url: `users/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
    deleteUser: builder.mutation<
      UserTypes.DeleteUserResponse,
      UserTypes.DeleteUserRequest
    >({
      query: ({ id }) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
    }),
    getUserStatistic: builder.query<
      UserTypes.GetUserStatisticResponse,
      UserTypes.GetUserStatisticRequest
    >({
      query: ({ id }) => `users/${id}/statistic`,
    }),
    getMe: builder.query<MeTypes.GetMeResponse, MeTypes.GetMeRequest>({
      query: () => `me`,
    }),
    patchMe: builder.mutation<MeTypes.PatchMeResponse, MeTypes.PatchMeRequest>({
      query: (data) => ({
        url: `me`,
        method: 'PATCH',
        body: data,
      }),
    }),
    deleteMe: builder.mutation<
      MeTypes.DeleteMeResponse,
      MeTypes.DeleteMeRequest
    >({
      query: () => ({
        url: `me`,
        method: 'DELETE',
      }),
    }),
    patchMyPassword: builder.mutation<
      MeTypes.PatchMyPasswordResponse,
      MeTypes.PatchMyPasswordRequest
    >({
      query: (data) => ({
        url: `me`,
        method: 'PATCH',
        body: data,
      }),
    }),
    getAuth: builder.query<AuthTypes.GetAuthResponse, AuthTypes.GetAuthRequest>(
      {
        query: () => `auth`,
      }
    ),
    login: builder.mutation<AuthTypes.LoginResponse, AuthTypes.LoginRequest>({
      query: (data) => ({
        url: `auth/login`,
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation<
      AuthTypes.LogoutResponse,
      AuthTypes.LogoutResponse
    >({
      query: () => ({
        url: `auth/logout`,
        method: 'POST',
      }),
    }),
    register: builder.mutation<
      AuthTypes.RegisterResponse,
      AuthTypes.RegisterResponse
    >({
      query: (data) => ({
        url: `register`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const {
  useGetUserQuery,
  useGetUsersQuery,
  usePatchUserMutation,
  useDeleteUserMutation,
  useGetUserStatisticQuery,
  useGetMeQuery,
  usePatchMeMutation,
  useDeleteMeMutation,
  usePatchMyPasswordMutation,
  useGetAuthQuery,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
} = userApi
