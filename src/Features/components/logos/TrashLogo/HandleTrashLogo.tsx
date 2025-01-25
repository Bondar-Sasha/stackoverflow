import { toast } from 'react-toastify'

import { TrashLogo } from '../../../../Entities'
import { useLogoutMutation } from '../../../api/user'
import { Spinner } from '../../../../Shared'
import { setIsAuth, useAppDispatch } from '../../../../App'

const HandleTrashLogo: typeof TrashLogo = (props) => {
  const dispatch = useAppDispatch()
  const [logout, { data, isLoading }] = useLogoutMutation()

  const handleClick = async () => {
    await logout().catch((error: unknown) => console.error(error))
    if (!data) {
      dispatch(setIsAuth(false))
      toast('You have successfully logged out', {
        type: 'success',
        autoClose: 1900,
      })
    } else {
      toast('Server error was occurred', {
        type: 'error',
        autoClose: 1900,
      })
    }
  }
  return isLoading ? (
    <Spinner className="text-ordinary-text" />
  ) : (
    <TrashLogo onClick={handleClick} {...props} />
  )
}

export default HandleTrashLogo
