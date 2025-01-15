export interface UserForRegRequest {
  username: string
  password: string
}

export interface UserForRegResponse {
  id: number
  username: string
  role: 'user'
}
