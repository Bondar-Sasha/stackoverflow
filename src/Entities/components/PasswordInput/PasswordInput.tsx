import { FC, useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

import { BasicInput } from '../../../Shared'
import styles from './styles/passwordInput.module.css'

interface PreparedEyeProps {
  onClick: () => void
  eyeState: boolean
  className?: string
}

const PreparedEye: FC<PreparedEyeProps> = ({
  onClick,
  eyeState,
  className,
}) => {
  return eyeState ? (
    <BsEyeSlash onClick={onClick} className={className} />
  ) : (
    <BsEye onClick={onClick} className={className} />
  )
}

const PasswordInput: typeof BasicInput = (props) => {
  const [eyeState, setEye] = useState<boolean>(true)
  const handleClick = () => {
    setEye((prev) => !prev)
  }
  return (
    <div className="relative">
      <BasicInput {...props} type={eyeState ? 'password' : 'text'} />
      <PreparedEye
        onClick={handleClick}
        eyeState={eyeState}
        className={`text-theme cursor-pointer text-xl ${styles.eye}`}
      />
    </div>
  )
}

export default PasswordInput
