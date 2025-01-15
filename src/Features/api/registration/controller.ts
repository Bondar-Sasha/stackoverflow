import { useRegisterMutation } from './implementation'

class RegistrationController {
  registerUserControls() {
    const controls = useRegisterMutation()
    return controls
  }
}
export default new RegistrationController()
