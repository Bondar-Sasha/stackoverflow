import { FC } from 'react'
import { FaRegUser } from 'react-icons/fa'

interface UserLogoProps {
  className?: string
  onClick?: () => void
}

const UserLogo: FC<UserLogoProps> = ({ className = '', onClick }) => {
  return (
    <FaRegUser onClick={onClick} className={`cursor-pointer ${className}`} />
  )
}

export default UserLogo
