import { toast } from 'react-toastify'
import { setIsAuth, useAppDispatch } from '../../../../App'
import { LogoutLogo } from '../../../../Entities'
import { BasicButton, Spinner } from '../../../../Shared'
import { useLogoutMutation } from '../../../api/user'

const LogoutButton: typeof BasicButton = ({ className = '', ...props }) => {
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
  const preparedClasses = [
    'bg-theme rounded-md text-osseous-theme',
    className,
  ].join(' ')

  return (
    <BasicButton onClick={handleClick} {...props} className={preparedClasses}>
      {isLoading ? <Spinner /> : <LogoutLogo />}
    </BasicButton>
  )
}

export default LogoutButton
