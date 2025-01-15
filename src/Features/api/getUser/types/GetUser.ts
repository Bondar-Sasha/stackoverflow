export interface GetUserRequest {
  id: number
}

export interface GetUserResponse {
  id: number
  username: string
  role: 'user'
}
