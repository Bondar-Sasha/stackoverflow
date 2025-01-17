import { FC } from 'react'
import { FaRegUser } from 'react-icons/fa'

interface UserLogoProps {
  className?: string
  onClick?: () => void
}

const UserLogo: FC<UserLogoProps> = (props) => {
  return (
    <div {...props}>
      <FaRegUser className="w-full" />
    </div>
  )
}

export default UserLogo
