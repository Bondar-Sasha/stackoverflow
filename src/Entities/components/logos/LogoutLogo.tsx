import { FC } from 'react'
import { MdOutlineLogout } from 'react-icons/md'
import { LogoWrapper } from '../../../Shared'

interface LogoutLogoProps {
  className?: string
  onClick?: () => void
}

const LogoutLogo: FC<LogoutLogoProps> = (props) => {
  return (
    <LogoWrapper {...props}>
      {' '}
      <MdOutlineLogout className="cursor-pointer color-inherit" />
    </LogoWrapper>
  )
}

export default LogoutLogo
