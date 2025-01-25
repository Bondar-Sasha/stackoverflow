import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { MeTypes } from './types/Me'
import type { UserTypes } from './types/User'
import type { AuthTypes } from './types/Auth'
import { baseUrl } from '../../constants'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: 'include',
  }),

  tagTypes: ['UserCredentials', 'UserStatistics', 'IsUserAuth'],
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
      providesTags: ['UserStatistics'],
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
      invalidatesTags: ['UserStatistics'],
    }),
    deleteMe: builder.mutation<
      MeTypes.DeleteMeResponse,
      MeTypes.DeleteMeRequest
    >({
      query: () => ({
        url: `me`,
        method: 'DELETE',
      }),
      invalidatesTags: ['UserCredentials', 'IsUserAuth', 'UserStatistics'],
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
      invalidatesTags: ['UserStatistics'],
    }),
    getAuth: builder.query<AuthTypes.GetAuthResponse, AuthTypes.GetAuthRequest>(
      {
        query: () => `auth`,
        providesTags: ['IsUserAuth'],
      }
    ),
    login: builder.mutation<AuthTypes.LoginResponse, AuthTypes.LoginRequest>({
      query: (data) => ({
        url: `auth/login`,
        method: 'POST',
        body: data,
      }),

      invalidatesTags: ['UserCredentials', 'IsUserAuth', 'UserStatistics'],
    }),
    logout: builder.mutation<AuthTypes.LogoutResponse, AuthTypes.LogoutRequest>(
      {
        query: () => ({
          url: `auth/logout`,
          method: 'POST',
        }),
        invalidatesTags: ['UserCredentials', 'IsUserAuth', 'UserStatistics'],
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
    }),
  }),
})

export const {
  useGetUserQuery,
  useLazyGetUserQuery,
  useGetUsersQuery,
  usePatchUserMutation,
  useDeleteUserMutation,
  useGetUserStatisticQuery,
  useLazyGetUserStatisticQuery,
  useGetMeQuery,
  useLazyGetMeQuery,
  usePatchMeMutation,
  useDeleteMeMutation,
  usePatchMyPasswordMutation,
  useGetAuthQuery,
  useLazyGetAuthQuery,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
} = userApi
