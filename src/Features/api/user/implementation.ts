import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { MeTypes } from './types/Me'
import type { UserTypes } from './types/User'
import type { AuthTypes } from './types/Auth'
import { baseUrl } from '../../../Shared'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: 'include',
  }),

  tagTypes: ['User', 'MeData', 'IsMeAuth'],
  endpoints: (builder) => ({
    getUsers: builder.query<
      UserTypes.GetUsersResponse,
      UserTypes.GetUsersRequest
    >({
      query: ({ page, limit }) => `users?page=${page}&limit=${limit}`,
      providesTags: ['User'],
    }),
    getUser: builder.query<UserTypes.GetUserResponse, UserTypes.GetUserRequest>(
      {
        query: ({ id }) => `users/${id}`,
        providesTags: ['User'],
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
      invalidatesTags: ['User'],
    }),
    deleteUser: builder.mutation<
      UserTypes.DeleteUserResponse,
      UserTypes.DeleteUserRequest
    >({
      query: ({ id }) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
    }),
    getUserStatistic: builder.query<
      UserTypes.GetUserStatisticResponse,
      UserTypes.GetUserStatisticRequest
    >({
      query: ({ id }) => `users/${id}/statistic`,
      providesTags: ['User'],
    }),
    getMe: builder.query<MeTypes.GetMeResponse, MeTypes.GetMeRequest>({
      query: () => `me`,
      providesTags: ['MeData'],
    }),
    patchMe: builder.mutation<MeTypes.PatchMeResponse, MeTypes.PatchMeRequest>({
      query: (data) => ({
        url: `me`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['MeData'],
    }),
    deleteMe: builder.mutation<
      MeTypes.DeleteMeResponse,
      MeTypes.DeleteMeRequest
    >({
      query: () => ({
        url: `me`,
        method: 'DELETE',
      }),
      invalidatesTags: ['MeData', 'IsMeAuth'],
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
      invalidatesTags: ['MeData'],
    }),
    getAuth: builder.query<AuthTypes.GetAuthResponse, AuthTypes.GetAuthRequest>(
      {
        query: () => `auth`,
        providesTags: ['IsMeAuth'],
      }
    ),
    login: builder.mutation<AuthTypes.LoginResponse, AuthTypes.LoginRequest>({
      query: (data) => ({
        url: `auth/login`,
        method: 'POST',
        body: data,
      }),

      invalidatesTags: ['MeData', 'IsMeAuth'],
    }),
    logout: builder.mutation<AuthTypes.LogoutResponse, AuthTypes.LogoutRequest>(
      {
        query: () => ({
          url: `auth/logout`,
          method: 'POST',
        }),
        invalidatesTags: ['IsMeAuth'],
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
