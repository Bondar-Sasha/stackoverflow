export namespace AuthTypes {
  export type GetAuthRequest = void
  export interface GetAuthResponse {
    data: {
      id: string
      username: string
      role: string
    }
  }
  export interface LoginRequest {
    username: string
    password: string
  }
  export interface LoginResponse {
    data: {
      id: string
      username: string
      role: string
    }
    message: string
  }
  export interface RegisterRequest {
    username: string
    password: string
  }
  export interface RegisterResponse {
    data: {
      id: string
      username: string
      role: string
    }
    message: string
  }
  export type LogoutRequest = void

  export type LogoutResponse = void
}
