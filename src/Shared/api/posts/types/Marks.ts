import {ProgrammingLanguages} from '../../../../Shared'

export namespace MarksTypes {
  export interface GetMarksRequest {
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

  export interface GetMarksResponse {
    data: {
      items: Mark[]
      totalCount: number
    }
  }

  export interface CreateMarkRequest {
    type: 'like' | 'dislike'
    snippetId: number
  }
  export interface CreateMarkResponse {
    data: {
      type: 'like' | 'dislike'
      snippet: {
        id: string
        code: string
        language: ProgrammingLanguages
      }
      user: User
      id: string
    }
  }
  export interface GetMarkRequest {
    id: number
  }
  export interface GetMarkResponse {
    data: Mark
  }
  export interface EditMarkRequest {
    type: 'like' | 'dislike'
    snippetId: number
  }
  export interface EditMarkResponse {
    data: {
      updatedCount: number
    }
    message: string
  }
}
