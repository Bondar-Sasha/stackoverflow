export namespace CommentsTypes {
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

  export interface CreateCommentRequest {
    snippetId: number
    content: string
  }
  export interface CreateCommentResponse {
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
