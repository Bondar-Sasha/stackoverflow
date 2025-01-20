import { FC } from 'react'
// import { useNavigate } from 'react-router-dom'
import { selectorUser, useAppSelector } from '../../../App/redux'

import { HandleAppLogo, HandleUserLogo } from '../../../Features'

interface HeaderProps {
  children?: React.ReactNode
  className?: string
}

const Header: FC<HeaderProps> = ({ className = '' }) => {
  const user = useAppSelector(selectorUser)
  return (
    <header
      className={`w-full h-14 flex items-center justify-between sticky top-0 left-0 shadow-md pl-3 pr-3  ${className}`}
    >
      <HandleAppLogo className="w-36" />
      <div className="main_inf cursor-pointer flex items-center justify-space-between">
        <h1 className="text-white">CODELANG</h1>
      </div>
      <div className="interactivity flex items-center justify-space-between">
        <div className="controls">
          {user.id !== '-1' ? <HandleUserLogo /> : <></>}
        </div>
      </div>
    </header>
  )
}

export default Header
