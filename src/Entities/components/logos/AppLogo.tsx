import { FC } from 'react'
import { FaCode } from 'react-icons/fa6'

import { LogoWrapper } from '../../../Shared'

interface AppLogoProps {
  className?: string
  onClick?: () => void
}
const AppLogo: FC<AppLogoProps> = (props) => {
  return (
    <LogoWrapper {...props}>
      {' '}
      <FaCode className="cursor-pointer color-inherit hover:text-color-for-color" />
    </LogoWrapper>
  )
}

export default AppLogo
