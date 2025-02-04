import {toast} from 'react-toastify'
import {TrashLogo} from '../../../../Entities'
import {
  BasicButton,
  Errors,
  Spinner,
  useDeleteMeMutation,
} from '../../../../Shared'

const DeleteAccButton: typeof BasicButton = ({className = '', ...props}) => {
  const [deleteMyAcc, {isLoading}] = useDeleteMeMutation()

  const handleClick = async () => {
    try {
      const response = await deleteMyAcc().unwrap()

      toast(response.message, {
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
    'bg-red-500 rounded-md text-white cursor-pointer',
    className,
  ].join(' ')

  return (
    <BasicButton
      onClick={handleClick}
      {...props}
      disabled={isLoading}
      className={preparedClasses}
    >
      {isLoading ? <Spinner /> : <TrashLogo />}
    </BasicButton>
  )
}

export default DeleteAccButton
