export namespace UserTypes {
  export interface GetUsersRequest {
    page: number
    limit: number
  }
  interface User {
    id: string
    username: string
    role: string
  }
  interface UserMetaInf0 {
    itemsPerPage: number
    totalItems: number
    currentPage: number
  }

  export interface GetUsersResponse {
    data: User[]
    meta: UserMetaInf0
  }

  export interface GetUserRequest {
    id: number
  }
  export interface GetUserResponse {
    data: {
      id: string
      username: string
      role: string
    }
  }
  export interface PatchUserRequest {
    id: number
    username: string
    password: string
  }
  export interface PatchUserResponse {
    data: {
      id: string
      username: string
      role: string
      password: string
      tempPassword: string
    }
    message: string
  }
  export interface DeleteUserRequest {
    id: string
  }
  export interface DeleteUserResponse {
    data: {
      id: string
      username: string
      role: string
    }
  }
  export interface GetUserStatisticRequest {
    id: string
  }
  export interface GetUserStatisticResponse {
    data: {
      id: string
      username: string
      role: string
      statistic: {
        snippetsCount: number
        rating: number
        commentsCount: number
        likesCount: number
        dislikesCount: number
        questionsCount: number
        correctAnswersCount: number
        regularAnswersCount: number
      }
    }
  }
}
