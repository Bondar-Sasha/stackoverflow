import { FC } from 'react'
import { FaCode } from 'react-icons/fa6'

interface AppLogoProps {
  className?: string
  onClick?: () => void
}
const AppLogo: FC<AppLogoProps> = ({ className = '', onClick }) => {
  return <FaCode onClick={onClick} className={`cursor-pointer ${className}`} />
}

export default AppLogo
// bg-osseous-theme hover:text-gray-400
