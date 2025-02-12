import {FC, ReactNode} from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import {useNavigate} from 'react-router-dom'

import styles from './styles/headerWrapper.module.css'
import {FaCode} from 'react-icons/fa6'

interface Classes {
  header?: string
  appName?: string
  headerButtons?: string
}
interface HeaderWrapperProps {
  children: ReactNode
  asideHandler?: () => void
  classNames?: Classes
}

const HeaderWrapper: FC<HeaderWrapperProps> = ({
  children,
  asideHandler = () => {},
  classNames = {header: '', appName: '', headerButtons: ''},
}) => {
  const navigate = useNavigate()

  return (
    <header
      className={`w-full h-14 flex items-center justify-between fixed z-50 top-0 left-0 shadow-xl pl-3 pr-3 bg-theme ${classNames.header}`}
    >
      <div
        className={`text-osseous-theme text-xl ${styles.burger}`}
        onClick={asideHandler}
      >
        <RxHamburgerMenu />
      </div>

      <div className="flex items-center justify-between">
        <FaCode
          onClick={() => navigate('/')}
          className="cursor-pointer text-2xl text-osseous-theme hover:text-gray-200"
        />
        <div
          className={`main_inf cursor-pointer flex items-center ml-2 ${classNames.appName}`}
        >
          <h1
            onClick={() => navigate('/')}
            className="text-osseous-theme hover:text-gray-200"
          >
            CODELANG
          </h1>
        </div>
      </div>
      <div className="">
        <div
          className={`w-full flex items-center justify-space-between ${classNames.headerButtons}`}
        >
          {children}
        </div>
      </div>
    </header>
  )
}

export default HeaderWrapper
