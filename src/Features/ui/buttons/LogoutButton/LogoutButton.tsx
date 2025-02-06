import {toast} from 'react-toastify'
import {LogoutLogo} from '../../../../Entities'
import {
  BasicButton,
  Errors,
  Spinner,
  useLogoutMutation,
} from '../../../../Shared'

const LogoutButton: typeof BasicButton = ({className = '', ...props}) => {
  const [logout, {isLoading}] = useLogoutMutation()

  const handleClick = async () => {
    try {
      await logout().unwrap()
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
  const preparedClasses = [
    'bg-theme rounded-md text-osseous-theme',
    className,
  ].join(' ')

  return (
    <BasicButton
      {...props}
      onClick={handleClick}
      disabled={isLoading}
      className={preparedClasses}
    >
      {isLoading ? <Spinner /> : <LogoutLogo />}
    </BasicButton>
  )
}

export default LogoutButton
