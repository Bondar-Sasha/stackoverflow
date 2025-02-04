export namespace CommentsTypes {
  export interface GetCommentsRequest {
    page: number
    limit: number
  }
  interface User {
    id: string
    username: string
    role: string
  }

  interface Comment {
    id: string
    content: string
    user: User
  }

  export interface GetCommentsResponse {
    data: {
      items: Comment[]
      totalCount: number
    }
  }

  export interface CreateCommentRequest {
    snippetId: number
    content: string
  }
  export interface CreateCommentResponse {
    data: Comment
  }
  export interface GetCommentRequest {
    id: number
  }
  export interface GetCommentResponse {
    data: Comment
  }
  export interface EditCommentRequest {
    id: number
    content: string
  }
  export interface EditCommentResponse {
    data: {
      updatedCount: number
    }
    message: string
  }
  export interface DeleteCommentRequest {
    id: number
  }
  export interface DeleteCommentResponse {
    data: {
      content: string
      user: User
    }
    message: string
  }
}
