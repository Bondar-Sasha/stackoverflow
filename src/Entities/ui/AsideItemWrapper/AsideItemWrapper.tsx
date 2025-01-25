import { FC, ReactNode } from 'react'

interface AsideItemWrapperProps {
  children: ReactNode
  onClick?: () => void
  isChosen: boolean
  label: string
}

const AsideItemWrapper: FC<AsideItemWrapperProps> = ({
  children,
  label,
  isChosen,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) onClick()
  }
  return (
    <div
      className={`flex items-center w-full h-11 pl-5 cursor-pointer text-osseous-theme hover:bg-[rgb(60,130,195)] transition duration-100 ease-in-out ${
        isChosen ? 'bg-[rgb(60,130,195)]' : 'bg-theme'
      }`}
      onClick={handleClick}
    >
      {children} <span className="ml-2">{label}</span>
    </div>
  )
}

export default AsideItemWrapper
