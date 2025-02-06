import {BasicButton} from '../../../../Shared'
import {FC} from 'react'
import {useNavigate} from 'react-router-dom'

interface SimpleRedirectingButtonProps {
  type: 'login' | 'singUp' | 'home'
  className?: string
}

interface ButtonDataItem {
  controlledPath: string
  label: string
}

const buttonsData: Record<
  SimpleRedirectingButtonProps['type'],
  ButtonDataItem
> = {
  home: {controlledPath: '/', label: 'Home'},
  login: {
    controlledPath: '/auth/login',
    label: 'login',
  },
  singUp: {
    controlledPath: '/auth/registration',
    label: 'sing up',
  },
}

const SimpleRedirectingButton: FC<SimpleRedirectingButtonProps> = ({
  type,
  className = '',
}) => {
  const navigate = useNavigate()

  const {controlledPath, label} = buttonsData[type]

  const handleClick = () => {
    navigate(controlledPath)
  }
  const preparedClasses = [
    'bg-osseous-theme rounded-full w-28 ordinary-text-theme hover:bg-gray-200',
    className,
  ].join(' ')

  return (
    <BasicButton onClick={handleClick} className={preparedClasses}>
      {label}
    </BasicButton>
  )
}

export default SimpleRedirectingButton
