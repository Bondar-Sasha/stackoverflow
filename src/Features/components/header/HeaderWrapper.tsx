import { FC, ReactNode } from 'react'

import { HandleAppLogo, HandleAppName } from '../logos'

import styles from './styles/headerWrapper.module.css'

interface HeaderWrapperProps {
  children: ReactNode
}

const HeaderWrapper: FC<HeaderWrapperProps> = ({ children }) => {
  return (
    <header
      className={`w-full h-14 flex items-center justify-between fixed z-10 top-0 left-0 shadow-xl pl-3 pr-3 bg-theme ${styles.header}`}
    >
      <div className="flex items-center justify-between">
        <HandleAppLogo className="text-2xl text-osseous-theme" />
        <div className="main_inf cursor-pointer flex items-center  ml-2">
          <HandleAppName />
        </div>
      </div>
      <div className="">
        <div className="w-full flex items-center justify-space-between">
          {children}
        </div>
      </div>
    </header>
  )
}

export default HeaderWrapper
