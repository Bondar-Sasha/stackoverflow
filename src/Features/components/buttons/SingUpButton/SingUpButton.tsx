import { BasicButton } from '../../../../Shared'
import { useNavigate } from 'react-router-dom'

const SingUpButton: typeof BasicButton = ({ className, ...props }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/auth/registration')
  }
  const preparedClasses = [
    'bg-osseous-theme rounded-full w-28 text-ordinary-text hover:bg-color-for-color',
    className,
  ].join(' ')

  return (
    <BasicButton
      onClick={handleClick}
      variant="outlined"
      {...props}
      className={preparedClasses}
    >
      sing up
    </BasicButton>
  )
}

export default SingUpButton
