import { FC } from 'react'
import { IoLanguageSharp } from 'react-icons/io5'
import { FaCode } from 'react-icons/fa6'

interface HeaderProps {
  children?: React.ReactNode
}

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header className="h-14 flex items-center justify-space-between shadow-md pl-3 pr-3 bg-blue-700">
      <div className="main_inf cursor-pointer flex items-center justify-space-between">
        <FaCode className="text-white" />
        <h1 className="text-white">CODELANG</h1>
      </div>
      <div className="interactivity flex items-center justify-space-between">
        <div className="controls">{children}</div>
        <div className="lang">
          <IoLanguageSharp className="text-white" />
        </div>
      </div>
    </header>
  )
}

export default Header
