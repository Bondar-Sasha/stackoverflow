import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import type {PostsTypes} from './types/Posts'
import type {MarksTypes} from './types/Marks'
import type {CommentsTypes} from './types/Comments'

import {baseUrl} from '../../constants'

function markQuantity(
  marks: PostsTypes.GetPostsResponse['data']['data'][number]['marks']
): (item: 'like' | 'dislike') => number {
  return (targetField) => {
    return marks.reduce((acc, curr) => {
      if (curr.type === targetField) {
        return acc + 1
      }
      return acc
    }, 0)
  }
}

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: 'include',
  }),

  tagTypes: ['Posts', 'Post', 'Marks', 'Mark', 'Comments', 'Comment'],
  endpoints: (builder) => ({
    getPosts: builder.query<
      PostsTypes.GetPostsPreparedResponse,
      PostsTypes.GetPostsRequest
    >({
      query: ({page, limit, userId}) =>
        `snippets?${
          userId ? `userId=${userId}&` : ''
        }page=${page}&limit=${limit}`,
      providesTags: ['Posts'],
      transformResponse: (
        response: PostsTypes.GetPostsResponse,
        _meta,
        arg
      ) => {
        const preparedResponse = response.data.data.map(
          ({comments, marks, ...items}) => {
            console.log(arg)
            const preparedMarkQuantity = markQuantity(marks)
            const likesQuantity = preparedMarkQuantity('like')
            const dislikesQuantity = preparedMarkQuantity('dislike')
            const commentsQuantity = comments.length
            const myMark: 'like' | 'dislike' | undefined = arg.senderId
              ? marks.find((item) => item.user.id === String(arg.senderId))
                  ?.type
              : undefined

            return {
              ...items,
              myMark,
              dislikesQuantity,
              likesQuantity,
              commentsQuantity,
            }
          }
        )
        return preparedResponse
      },
    }),
    getPost: builder.query<
      PostsTypes.GetPostResponse,
      PostsTypes.GetPostRequest
    >({
      query: ({id}) => `snippets/${id}`,
      providesTags: ['Post'],
    }),
    createPost: builder.mutation<
      PostsTypes.CreatePostResponse,
      PostsTypes.CreatePostRequest
    >({
      query: (data) => ({
        url: `snippets`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Posts'],
    }),
    editPost: builder.mutation<
      PostsTypes.EditPostResponse,
      PostsTypes.EditPostRequest
    >({
      query: ({id, ...data}) => ({
        url: `snippets/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Posts', 'Post'],
    }),
    deletePost: builder.mutation<
      PostsTypes.DeletePostResponse,
      PostsTypes.DeletePostRequest
    >({
      query: ({id}) => ({
        url: `snippets/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Posts', 'Post'],
    }),
    getMarks: builder.query<
      MarksTypes.GetMarksResponse,
      MarksTypes.GetMarksRequest
    >({
      query: ({page, limit}) => `marks?page=${page}&limit=${limit}`,
      providesTags: ['Marks'],
    }),
    getMark: builder.query<
      MarksTypes.GetMarkResponse,
      MarksTypes.GetMarkRequest
    >({
      query: ({id}) => `marks/${id}`,
      providesTags: ['Mark'],
    }),
    createMark: builder.mutation<
      MarksTypes.CreateMarkResponse,
      MarksTypes.CreateMarkRequest
    >({
      query: (data) => ({
        url: `marks`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Marks', 'Mark'],
    }),
    editMark: builder.mutation<
      MarksTypes.EditMarkResponse,
      MarksTypes.EditMarkRequest
    >({
      query: (data) => ({
        url: `marks`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Marks', 'Mark'],
    }),

    getComments: builder.query<
      CommentsTypes.GetCommentsResponse,
      CommentsTypes.GetCommentsRequest
    >({
      query: ({page, limit}) => `comments?page=${page}&limit=${limit}`,
      providesTags: ['Comments'],
    }),
    getComment: builder.query<
      CommentsTypes.GetCommentResponse,
      CommentsTypes.GetCommentRequest
    >({
      query: ({id}) => `comments/${id}`,
      providesTags: ['Comment'],
    }),
    createComment: builder.mutation<
      CommentsTypes.CreateCommentResponse,
      CommentsTypes.CreateCommentRequest
    >({
      query: (data) => ({
        url: `comments`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Comments', 'Comment'],
    }),
    editComment: builder.mutation<
      CommentsTypes.EditCommentResponse,
      CommentsTypes.EditCommentRequest
    >({
      query: ({id, ...data}) => ({
        url: `comments/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Comments', 'Comment'],
    }),
    deleteComment: builder.mutation<
      CommentsTypes.DeleteCommentResponse,
      CommentsTypes.DeleteCommentRequest
    >({
      query: ({id}) => ({
        url: `comments/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Comments', 'Comment'],
    }),
  }),
})

export const {
  useCreatePostMutation,
  useDeletePostMutation,
  useEditPostMutation,
  useGetPostQuery,
  useGetPostsQuery,
  useCreateCommentMutation,
  useCreateMarkMutation,
  useDeleteCommentMutation,
  useEditCommentMutation,
  useEditMarkMutation,
  useGetCommentQuery,
  useGetCommentsQuery,
  useGetMarkQuery,
  useGetMarksQuery,
} = postsApi
