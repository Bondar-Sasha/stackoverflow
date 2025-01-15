import { useLoginMutation } from './implementation'

class LoginController {
  loginUserControls() {
    const controls = useLoginMutation()
    return controls
  }
}
export default new LoginController()
