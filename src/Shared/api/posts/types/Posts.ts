export namespace PostsTypes {
  export type ProgrammingLanguages =
    | 'JavaScript'
    | 'Python'
    | 'Java'
    | 'C/C++'
    | 'C#'
    | 'Go'
    | 'Kotlin'
    | 'Ruby'

  export interface GetPostsRequest {
    userId?: number
    senderId?: number
    page: number
    limit: number
  }
  interface User {
    id: string
    username: string
    role: string
  }
  interface Mark {
    id: string
    type: 'like' | 'dislike'
    user: User
  }
  interface Comment {
    id: string
    content: string
  }
  interface Post {
    id: string
    code: string
    language: ProgrammingLanguages
    comments: Comment[]
    marks: Mark[]
    user: User
  }
  interface PreparedPost {
    id: string
    code: string
    language: ProgrammingLanguages
    dislikesQuantity: number
    likesQuantity: number
    commentsQuantity: number
    comments: Comment[]
    myMark: 'like' | 'dislike' | undefined
    user: User
  }

  export interface GetPostsResponse {
    data: {
      data: Post[]
    }
  }
  export type GetPostsPreparedResponse = PreparedPost[]

  export interface CreatePostRequest {
    code: string
    language: ProgrammingLanguages
  }
  export interface CreatePostResponse {
    data: {
      code: string
      language: ProgrammingLanguages
      user: User
      id: string
    }
  }
  export interface GetPostRequest {
    senderId?: number
    id: number
  }
  export interface GetPostResponse {
    data: Post
  }
  export type GetPreparedPostResponse = PreparedPost

  export interface EditPostRequest {
    id: number
    code: string
    language: ProgrammingLanguages
  }
  export interface EditPostResponse {
    data: {
      updatedCount: number
    }
    message: string
  }
  export interface DeletePostRequest {
    id: number
  }
  export interface DeletePostResponse {
    data: {
      code: string
      language: ProgrammingLanguages
      user: User
      likesCount: number
      dislikesCount: number
      commentsCount: number
      isLikedByUser: number
      isDislikedByUser: number
    }
    message: string
  }
}
