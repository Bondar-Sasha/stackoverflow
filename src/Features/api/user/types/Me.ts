export namespace MeTypes {
  export type GetMeRequest = void
  export interface GetMeResponse {
    id: string
    username: string
    role: string
  }
  export interface PatchMeRequest {
    username: string
    password: string
  }
  export interface PatchMeResponse {
    id: string
    username: string
    role: string
    password: string
    tempPassword: string
  }
  export type DeleteMeRequest = void
  export interface DeleteMeResponse {
    username: string
    role: string
  }
  export interface PatchMyPasswordRequest {
    oldPassword: string
    newPassword: string
  }
  export interface PatchMyPasswordResponse {
    updatedCount: {
      id: string
      username: string
      role: string
      password: string
      tempPassword: string
    }
  }
}
