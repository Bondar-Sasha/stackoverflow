import { toast } from 'react-toastify'

import { LogoutLogo } from '../../../../Entities'
import { Errors, Spinner, useLogoutMutation } from '../../../../Shared'
import { setIsAuth, useAppDispatch } from '../../../../App'

const HandleLogoutLogo: typeof LogoutLogo = (props) => {
  const dispatch = useAppDispatch()
  const [logout, { isLoading }] = useLogoutMutation()

  const handleClick = async () => {
    try {
      await logout().unwrap()
      dispatch(setIsAuth(false))
      toast('You have successfully logged out', {
        type: 'success',
        autoClose: 1900,
      })
    } catch (err) {
      toast((err as Errors.SimpleError).message, {
        type: 'error',
        autoClose: 1900,
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
