import { toast } from 'react-toastify'

import { LogoutLogo } from '../../../../Entities'
import { userApiController } from '../../../api/user'
import { Spinner } from '../../../../Shared'
import { setIsAuth, useAppDispatch } from '../../../../App'

const { logoutControls } = userApiController
const HandleLogoutLogo: typeof LogoutLogo = (props) => {
  const dispatch = useAppDispatch()
  const [logout, { data, isLoading }] = logoutControls()

  const handleClick = async () => {
    await logout().catch((error) => console.error(error))
    if (!data) {
      dispatch(setIsAuth(false))
      toast('You have successfully logged out', {
        type: 'success',
        theme: 'light',
      })
    } else {
      toast('Error was occurred', {
        type: 'error',
        theme: 'light',
      })
    }
  }
  return isLoading ? (
    <Spinner className="text-osseous-theme" />
  ) : (
    <LogoutLogo onClick={handleClick} {...props} />
  )
}

export default HandleLogoutLogo
