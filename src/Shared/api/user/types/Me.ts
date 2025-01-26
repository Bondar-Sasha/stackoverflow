export namespace MeTypes {
  export type GetMeRequest = void
  export interface GetMeResponse {
    data: {
      id: string
      username: string
      role: string
    }
  }
  export interface PatchMeRequest {
    username: string
    password?: string
  }
  export interface PatchMeResponse {
    data: {
      id: string
      username: string
      role: string
      password: string
      tempPassword: string
    }
    message: string
  }
  export type DeleteMeRequest = void
  export interface DeleteMeResponse {
    data: {
      username: string
      role: string
    }
    message: string
  }
  export interface PatchMyPasswordRequest {
    oldPassword: string
    newPassword: string
  }
  export interface PatchMyPasswordResponse {
    data: {
      updatedCount: {
        id: string
        username: string
        role: string
        password: string
        tempPassword: string
      }
    }
    message: string
  }
}
