import { FC, ReactNode } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

import { HandleAppLogo, HandleAppName } from '../logos'
import styles from './styles/headerWrapper.module.css'

interface HeaderWrapperProps {
  children: ReactNode
  asideHandler?: () => void
  isAsideBurger?: boolean
  className?: string
}

const HeaderWrapper: FC<HeaderWrapperProps> = ({
  children,
  asideHandler = () => {},
  isAsideBurger = true,
  className = '',
}) => {
  return (
    <header
      className={`w-full h-14 flex items-center justify-between fixed z-10 top-0 left-0 shadow-xl pl-3 pr-3 bg-theme ${className}`}
    >
      {isAsideBurger && (
        <div
          className={`text-osseous-theme text-xl ${styles.burger}`}
          onClick={asideHandler}
        >
          <RxHamburgerMenu />
        </div>
      )}
      <div className="flex items-center justify-between">
        <HandleAppLogo className="text-2xl text-osseous-theme hover:text-gray-200" />
        <div
          data-elem-role="app-name"
          className={`main_inf cursor-pointer flex items-center ml-2`}
        >
          <HandleAppName />
        </div>
      </div>
      <div className="">
        <div
          data-elem-role="nav-buttons-wrapper"
          className={`w-full flex items-center justify-space-between`}
        >
          {children}
        </div>
      </div>
    </header>
  )
}

export default HeaderWrapper
