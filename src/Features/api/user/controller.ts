import {
  useGetUserQuery,
  useGetUsersQuery,
  usePatchUserMutation,
  useDeleteUserMutation,
  useGetUserStatisticQuery,
  useGetMeQuery,
  usePatchMeMutation,
  useDeleteMeMutation,
  usePatchMyPasswordMutation,
  useGetAuthQuery,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
} from './implementation'
import { MeTypes } from './types/Me'
import { UserTypes } from './types/User'
import { AuthTypes } from './types/Auth'

class UserApiController {
  getUserControls(req: UserTypes.GetUserRequest) {
    const controls = useGetUserQuery(req)
    return controls
  }

  getUsersControls(req: UserTypes.GetUsersRequest) {
    const controls = useGetUsersQuery(req)
    return controls
  }

  patchUserControls() {
    const controls = usePatchUserMutation()
    return controls
  }

  deleteUserControls() {
    const controls = useDeleteUserMutation()
    return controls
  }

  getUserStatisticControls(req: UserTypes.GetUserStatisticRequest) {
    const controls = useGetUserStatisticQuery(req)
    return controls
  }

  getMeControls(req: MeTypes.GetMeRequest) {
    const controls = useGetMeQuery(req)
    return controls
  }

  patchMeControls() {
    const controls = usePatchMeMutation()
    return controls
  }

  deleteMeControls() {
    const controls = useDeleteMeMutation()
    return controls
  }

  patchMyPasswordControls() {
    const controls = usePatchMyPasswordMutation()
    return controls
  }

  getAuthControls(req: AuthTypes.GetAuthRequest) {
    const controls = useGetAuthQuery(req)
    return controls
  }

  loginControls() {
    const controls = useLoginMutation()
    return controls
  }

  logoutControls() {
    const controls = useLogoutMutation()
    return controls
  }

  registerControls() {
    const controls = useRegisterMutation()
    return controls
  }
}
export const userApiController = new UserApiController()
