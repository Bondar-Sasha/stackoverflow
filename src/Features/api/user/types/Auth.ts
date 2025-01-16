export namespace AuthTypes {
  export type GetAuthRequest = void
  export interface GetAuthResponse {
    id: string
    username: string
    role: string
  }
  export interface LoginRequest {
    username: string
    password: string
  }
  export interface LoginResponse {
    id: string
    username: string
    role: string
  }
  export interface RegisterRequest {
    username: string
    password: string
  }
  export interface RegisterResponse {
    id: string
    username: string
    role: string
  }
  export type LogoutRequest = void

  export type LogoutResponse = void
}
