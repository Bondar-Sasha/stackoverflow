import { FC } from 'react'
import AppLogoData from '../assets/logo-stackoverflow.svg'

interface AppLogoProps {
  className?: string
  onClick?: () => void
}

const AppLogo: FC<AppLogoProps> = (props) => {
  return (
    <div {...props}>
      <img src={AppLogoData} className="w-full cursor-pointer" alt="app logo" />
    </div>
  )
}

export default AppLogo
