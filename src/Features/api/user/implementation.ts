import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { MeTypes } from './types/Me'
import type { UserTypes } from './types/User'
import type { AuthTypes } from './types/Auth'
import { constants } from '../../../Shared'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: constants.baseUrl,
  }),

  tagTypes: ['UserCredentials'],
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
      providesTags: ['UserCredentials'],
    }),
    patchMe: builder.mutation<MeTypes.PatchMeResponse, MeTypes.PatchMeRequest>({
      query: (data) => ({
        url: `me`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['UserCredentials'],
    }),
    deleteMe: builder.mutation<
      MeTypes.DeleteMeResponse,
      MeTypes.DeleteMeRequest
    >({
      query: () => ({
        url: `me`,
        method: 'DELETE',
      }),
      invalidatesTags: ['UserCredentials'],
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
      invalidatesTags: ['UserCredentials'],
    }),
    getAuth: builder.query<AuthTypes.GetAuthResponse, AuthTypes.GetAuthRequest>(
      {
        query: () => `auth`,
        providesTags: ['UserCredentials'],
      }
    ),
    login: builder.mutation<AuthTypes.LoginResponse, AuthTypes.LoginRequest>({
      query: (data) => ({
        url: `auth/login`,
        method: 'POST',
        body: data,
        providesTags: ['UserCredentials'],
      }),
    }),
    logout: builder.mutation<AuthTypes.LogoutResponse, AuthTypes.LogoutRequest>(
      {
        query: () => ({
          url: `auth/logout`,
          method: 'POST',
        }),
        invalidatesTags: ['UserCredentials'],
      }
    ),
    register: builder.mutation<
      AuthTypes.RegisterResponse,
      AuthTypes.RegisterRequest
    >({
      query: (data) => ({
        url: `register`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['UserCredentials'],
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
