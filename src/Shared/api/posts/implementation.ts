import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import type {PostsTypes} from './types/Posts'
import type {CommentsTypes} from './types/Comments'
import {baseUrl} from '../../constants'

function markQuantity(
  marks: PostsTypes.GetPostsResponse['data']['data'][number]['marks']
): (item: 'like' | 'dislike') => number {
  return (targetField) => {
    return marks.reduce((acc, curr) => {
      return curr.type === targetField ? acc + 1 : acc
    }, 0)
  }
}

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: 'include',
  }),

  tagTypes: ['Post', 'Posts'],
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
          return ['Posts']
        }
        return [
          ...result.map(({id}) => ({type: 'Post' as const, id})),
          {type: 'Posts'},
        ]
      },
      transformResponse: (
        response: PostsTypes.GetPostsResponse,
        _meta,
        args
      ) => {
        return response.data.data.map(({comments, marks, ...items}) => {
          const preparedMarkQuantity = markQuantity(marks)
          const likesQuantity = preparedMarkQuantity('like')
          const dislikesQuantity = preparedMarkQuantity('dislike')
          const commentsQuantity = comments.length
          let myMark: 'like' | 'dislike' | 'none' = 'none'
          if (args.senderId) {
            myMark =
              marks.find((item) => item.user.id === String(args.senderId))
                ?.type ?? 'none'
          }

          return {
            ...items,
            comments,
            myMark,
            dislikesQuantity,
            likesQuantity,
            commentsQuantity,
          }
        })
      },
    }),

    getPost: builder.query<
      PostsTypes.GetPreparedPostResponse,
      PostsTypes.GetPostRequest
    >({
      query: ({id}) => `snippets/${id}`,
      providesTags: (result, _meta, args) => {
        return result ? [{type: 'Post', id: args.id}] : []
      },
      transformResponse: (
        response: PostsTypes.GetPostResponse,
        _meta,
        args
      ) => {
        const {comments, marks, ...items} = response.data
        const preparedMarkQuantity = markQuantity(marks)
        const likesQuantity = preparedMarkQuantity('like')
        const dislikesQuantity = preparedMarkQuantity('dislike')
        const commentsQuantity = comments.length
        let myMark: 'like' | 'dislike' | 'none' = 'none'
        if (args.senderId) {
          myMark =
            marks.find((item) => item.user.id === String(args.senderId))
              ?.type ?? 'none'
        }

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

    createMark: builder.mutation<
      PostsTypes.CreateMarkResponse,
      PostsTypes.CreateMarkRequest
    >({
      query: ({snippetId, ...data}) => ({
        url: `snippets/${snippetId}/mark`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: (_result, error, args) => {
        return error ? [] : [{type: 'Post', id: args.snippetId}]
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
      invalidatesTags: (_result, error, args) => {
        return error ? [] : [{type: 'Post', id: args.id}]
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
        return error ? [] : [{type: 'Post', id: args.snippetId}]
      },
    }),
  }),
})

export const {
  useCreatePostMutation,
  useEditPostMutation,
  useGetPostQuery,
  useLazyGetPostQuery,
  useGetPostsQuery,
  useCreateMarkMutation,
  useCreateCommentMutation,
} = postsApi
