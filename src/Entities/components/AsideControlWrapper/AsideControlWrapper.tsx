import { FC, ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

interface AsideControlWrapperProps {
  children: ReactNode
  onClick?: () => void
  controlledPath: string
  label: string
}

const AsideControlWrapper: FC<AsideControlWrapperProps> = ({
  children,
  label,
  controlledPath,
  onClick,
}) => {
  const location = useLocation()
  const isDesiredLocation = location.pathname === controlledPath

  const handleClick = () => {
    if (onClick) onClick()
  }
  return (
    <div
      className={`flex items-center w-full h-11 cursor-pointer text-osseous-theme hover:bg-[rgb(60,130,195)] transition duration-100 ease-in-out pl-5 ${
        isDesiredLocation ? 'bg-[rgb(60,130,195)]' : 'bg-theme'
      }`}
      onClick={handleClick}
    >
      {children} <span className="ml-2">{label}</span>
    </div>
  )
}

export default AsideControlWrapper
