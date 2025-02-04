import {FC} from 'react'
import {MdOutlineLogout} from 'react-icons/md'

interface LogoutLogoProps {
  className?: string
  onClick?: () => void
}

const LogoutLogo: FC<LogoutLogoProps> = ({className = '', onClick}) => {
  return (
    <MdOutlineLogout
      onClick={onClick}
      className={`cursor-pointer ${className}`}
    />
  )
}

export default LogoutLogo
