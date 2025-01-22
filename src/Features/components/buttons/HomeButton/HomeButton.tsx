import { BasicButton } from '../../../../Shared'
import { useNavigate } from 'react-router-dom'

const HomeButton: typeof BasicButton = ({ className = '', ...props }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }
  const preparedClasses = [
    'bg-osseous-theme rounded-full w-28 text-ordinary-text hover:bg-color-for-hover',
    className,
  ].join(' ')

  return (
    <BasicButton onClick={handleClick} {...props} className={preparedClasses}>
      Home
    </BasicButton>
  )
}

export default HomeButton
