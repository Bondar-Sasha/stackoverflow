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

  tagTypes: ['Posts', 'Post', 'Mark', 'Comments', 'Comment'],
  endpoints: (builder) => ({
    getPosts: builder.query<
      PostsTypes.GetPostsPreparedResponse,
      PostsTypes.GetPostsRequest
    >({
      query: ({page, limit, userId}) =>
        `snippets?${
          userId ? `userId=${userId}&` : ''
        }page=${page}&limit=${limit}`,
      providesTags: (result) => {
        if (!result) {
          return []
        }
        return [
          ...result.map(({id}) => ({type: 'Post' as const, id})),
          {type: 'Posts' as const},
        ]
      },

      transformResponse: (
        response: PostsTypes.GetPostsResponse,
        _meta,
        arg
      ) => {
        const preparedResponse = response.data.data.map(
          ({comments, marks, ...items}) => {
            const preparedMarkQuantity = markQuantity(marks)
            const likesQuantity = preparedMarkQuantity('like')
            const dislikesQuantity = preparedMarkQuantity('dislike')
            const commentsQuantity = 10
            const myMark: 'like' | 'dislike' | undefined = arg.senderId
              ? marks.find((item) => item.user.id === String(arg.senderId))
                  ?.type
              : undefined

            return {
              ...items,
              comments,
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
      PostsTypes.GetPreparedPostResponse,
      PostsTypes.GetPostRequest
    >({
      query: ({id}) => `snippets/${id}`,
      providesTags: (result) => {
        if (!result) {
          return []
        }
        return [{type: 'Post', id: result.id}]
      },

      transformResponse: (response: PostsTypes.GetPostResponse) => {
        const {comments, marks, ...items} = response.data
        const preparedMarkQuantity = markQuantity(marks)

        const likesQuantity = preparedMarkQuantity('like')
        const dislikesQuantity = preparedMarkQuantity('dislike')
        const commentsQuantity = comments.length
        const myMark: 'like' | 'dislike' | undefined = undefined

        return {
          ...items,
          myMark,
          dislikesQuantity,
          likesQuantity,
          commentsQuantity,
          comments: comments.reverse(),
        }
      },
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
      invalidatesTags: (_result, err, args) => {
        if (err) {
          return []
        }
        return [{type: 'Post', id: args.id}]
      },
    }),
    deletePost: builder.mutation<
      PostsTypes.DeletePostResponse,
      PostsTypes.DeletePostRequest
    >({
      query: ({id}) => ({
        url: `snippets/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, err, args) => {
        if (err) {
          return []
        }
        return [{type: 'Post', id: args.id}]
      },
    }),
    getMarks: builder.query<
      MarksTypes.GetMarksResponse,
      MarksTypes.GetMarksRequest
    >({
      query: ({page, limit}) => `marks?page=${page}&limit=${limit}`,
      providesTags: [],
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
      invalidatesTags: (_result, error, args) => {
        if (error) {
          return []
        }
        return [{type: 'Post', id: args.snippetId}]
      },
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
      invalidatesTags: (_result, error, args) => {
        if (error) {
          return []
        }
        return [{type: 'Post', id: args.snippetId}]
      },
    }),
    deleteMark: builder.mutation<
      MarksTypes.DeleteMarkResponse,
      MarksTypes.DeleteMarkRequest
    >({
      query: ({snippetId}) => ({
        url: `marks?snippetId=${snippetId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, error, args) => {
        if (error) {
          return []
        }
        return [{type: 'Post', id: args.snippetId}]
      },
    }),

    getComments: builder.query<
      CommentsTypes.GetCommentsResponse,
      CommentsTypes.GetCommentsRequest
    >({
      query: ({page, limit}) => `comments?page=${page}&limit=${limit}`,
      providesTags: (result) => {
        if (!result) {
          return [{type: 'Comments'}]
        }
        return [
          ...result.data.items.map(({id}) => ({type: 'Comment' as const, id})),
          {type: 'Comments'},
        ]
      },
    }),
    getComment: builder.query<
      CommentsTypes.GetCommentResponse,
      CommentsTypes.GetCommentRequest
    >({
      query: ({id}) => `comments/${id}`,
      providesTags: (_result, error, args) => {
        if (error) {
          return []
        }
        return [{type: 'Comment', id: args.id}]
      },
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
      invalidatesTags: (_result, error, args) => {
        if (error) {
          return []
        }
        return [{type: 'Post', id: args.snippetId}]
      },
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
      invalidatesTags: ['Comment'],
    }),
    deleteComment: builder.mutation<
      CommentsTypes.DeleteCommentResponse,
      CommentsTypes.DeleteCommentRequest
    >({
      query: ({id}) => ({
        url: `comments/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Comment'],
    }),
  }),
})

export const {
  useCreatePostMutation,
  useDeletePostMutation,
  useEditPostMutation,
  useGetPostQuery,
  useLazyGetPostQuery,
  useGetPostsQuery,
  useCreateCommentMutation,
  useDeleteMarkMutation,
  useCreateMarkMutation,
  // useDeleteCommentMutation,
  // useEditCommentMutation,
  useEditMarkMutation,
  // useGetCommentQuery,
  // useGetCommentsQuery,
  useGetMarkQuery,
  useGetMarksQuery,
} = postsApi
