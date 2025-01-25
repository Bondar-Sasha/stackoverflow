import { useState } from 'react'

import { BasicInput } from '../../../Shared'
import styles from './styles/passwordInput.module.css'
import PreparedEye from './PreparedEye'

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
