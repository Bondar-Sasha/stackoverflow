import { FC } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

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
export default PreparedEye
