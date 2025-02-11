import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import type {MeTypes} from './types/Me'
import type {UserTypes} from './types/User'
import type {AuthTypes} from './types/Auth'
import {baseUrl} from '../../constants'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: 'include',
  }),

  tagTypes: ['UserCredentials', 'UserStatistics', 'IsUserAuth'],
  endpoints: (builder) => ({
    getUsers: builder.query<
      UserTypes.GetUsersResponse['data']['data'],
      UserTypes.GetUsersRequest
    >({
      query: ({page, limit}) => `users?page=${page}&limit=${limit}`,
      transformResponse: (response: UserTypes.GetUsersResponse) => {
        return response['data']['data']
      },
      providesTags: (result) => {
        if (!result) {
          return []
        }
        return result.map(({id}) => ({type: 'UserCredentials', id}))
      },
    }),
    getUser: builder.query<
      UserTypes.GetUserResponse['data'],
      UserTypes.GetUserRequest
    >({
      query: ({id}) => `users/${id}`,
      transformResponse: (response: UserTypes.GetUserResponse) => {
        return response['data']
      },
      providesTags: (result) => {
        if (!result) {
          return []
        }
        return [{type: 'UserCredentials', id: result.id}]
      },
    }),
    patchUser: builder.mutation<
      UserTypes.PatchUserResponse,
      UserTypes.PatchUserRequest
    >({
      query: ({id, ...data}) => ({
        url: `users/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: (result, _meta, args) => {
        if (!result) {
          return []
        }
        return [{type: 'UserCredentials', id: args.id}]
      },
    }),
    deleteUser: builder.mutation<
      UserTypes.DeleteUserResponse,
      UserTypes.DeleteUserRequest
    >({
      query: ({id}) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, _meta, args) => {
        if (!result) {
          return []
        }
        return [{type: 'UserCredentials', id: args.id}]
      },
    }),
    getUserStatistic: builder.query<
      UserTypes.GetUserStatisticResponse['data'],
      UserTypes.GetUserStatisticRequest
    >({
      query: ({id}) => `users/${id}/statistic`,
      providesTags: (result, _meta, args) => {
        if (!result) {
          return []
        }
        return [{type: 'UserStatistics', id: args.id}]
      },
      transformResponse: (response: UserTypes.GetUserStatisticResponse) => {
        return response['data']
      },
    }),
    patchMe: builder.mutation<MeTypes.PatchMeResponse, MeTypes.PatchMeRequest>({
      query: (data) => ({
        url: `me`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: (result) => {
        if (!result) {
          return []
        }
        return [
          {type: 'UserStatistics', id: result.data.id},
          {type: 'UserCredentials', id: result.data.id},
        ]
      },
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
        url: `me/password`,
        method: 'PATCH',
        body: data,
      }),
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
    }),
    logout: builder.mutation<AuthTypes.LogoutResponse, AuthTypes.LogoutRequest>(
      {
        query: () => ({
          url: `auth/logout`,
          method: 'POST',
        }),
        invalidatesTags: ['IsUserAuth'],
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
  usePatchMeMutation,
  useDeleteMeMutation,
  usePatchMyPasswordMutation,
  useGetAuthQuery,
  useLazyGetAuthQuery,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
} = userApi
