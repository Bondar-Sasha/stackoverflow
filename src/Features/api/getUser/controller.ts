import { useGetUserQuery } from './implementation'
import { GetUserRequest } from './types/GetUser'

class GetUserController {
  getUserControls(req: GetUserRequest) {
    const controls = useGetUserQuery(req)
    return controls
  }
}
export default new GetUserController()
