import { BasicButton } from '../../../../Shared'
import { useNavigate } from 'react-router-dom'

const LoginButton: typeof BasicButton = ({ className = '', ...props }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/auth/login')
  }
  const preparedClasses = [
    'bg-osseous-theme rounded-full w-28 ordinary-text-theme hover:bg-gray-200',
    className,
  ].join(' ')

  return (
    <BasicButton onClick={handleClick} {...props} className={preparedClasses}>
      log in
    </BasicButton>
  )
}

export default LoginButton
