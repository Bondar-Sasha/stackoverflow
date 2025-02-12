import {useState} from 'react'
import {BsEye, BsEyeSlash} from 'react-icons/bs'

import styles from './styles/passwordInput.module.css'
import {BasicInput} from '@/Shared'

const PasswordInput: typeof BasicInput = (props) => {
  const [eyeState, setEye] = useState<boolean>(true)
  const handleClick = () => {
    setEye((prev) => !prev)
  }
  return (
    <div className="relative w-full">
      <BasicInput {...props} type={eyeState ? 'password' : 'text'} />
      {eyeState ? (
        <BsEyeSlash
          onClick={handleClick}
          className={`text-theme cursor-pointer text-xl ${styles.eye}`}
        />
      ) : (
        <BsEye
          onClick={handleClick}
          className={`text-theme cursor-pointer text-xl ${styles.eye}`}
        />
      )}
    </div>
  )
}

export default PasswordInput
