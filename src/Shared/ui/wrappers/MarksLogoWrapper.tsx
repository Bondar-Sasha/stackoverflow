import {FC, ReactNode} from 'react'

interface MarksLogoWrapperProps {
  isActive?: boolean
  children: ReactNode
  className?: string
}

const MarksLogoWrapper: FC<MarksLogoWrapperProps> = ({
  isActive = false,
  className = '',
  children,
}) => {
  return (
    <span
      className={`cursor-pointer ${
        isActive ? 'text-theme' : 'text-gray-300'
      } ${className}`}
    >
      {children}
    </span>
  )
}

export default MarksLogoWrapper
