import { toast } from 'react-toastify'
import { setIsAuth, useAppDispatch } from '../../../../App'
import { TrashLogo } from '../../../../Entities'
import { BasicButton, Spinner } from '../../../../Shared'
import { useDeleteMeMutation } from '../../../../Features'

const DeleteAccButton: typeof BasicButton = ({ className = '', ...props }) => {
  const dispatch = useAppDispatch()
  const [deleteMyAcc, { isLoading, isSuccess }] = useDeleteMeMutation()

  const handleClick = async () => {
    await deleteMyAcc().catch((error: unknown) => console.error(error))
    if (!isSuccess) {
      dispatch(setIsAuth(false))
      toast('You have successfully deleted your account', {
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
    'bg-red-500 rounded-md text-white cursor-pointer',
    className,
  ].join(' ')

  return (
    <BasicButton onClick={handleClick} {...props} className={preparedClasses}>
      {isLoading ? <Spinner /> : <TrashLogo />}
    </BasicButton>
  )
}

export default DeleteAccButton
