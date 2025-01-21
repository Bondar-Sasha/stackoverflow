import { FC } from 'react'
import { FaRegUser } from 'react-icons/fa'
import { LogoWrapper } from '../../../Shared'

interface UserLogoProps {
  className?: string
  onClick?: () => void
}

const UserLogo: FC<UserLogoProps> = (props) => {
  return (
    <LogoWrapper {...props}>
      {' '}
      <FaRegUser className="cursor-pointer color-inherit" />
    </LogoWrapper>
  )
}

export default UserLogo
