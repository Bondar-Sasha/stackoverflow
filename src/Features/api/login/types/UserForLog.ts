export interface UserForLogRequest {
  username: string
  password: string
}

export interface UserForLogResponse {
  id: number
  username: string
  role: 'user'
}
