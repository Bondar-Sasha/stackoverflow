import { FC, ReactNode } from 'react'

interface LogoWrapperProps {
  className?: string
  onClick?: () => void
  children: ReactNode
}

const LogoWrapper: FC<LogoWrapperProps> = (props) => {
  return <div {...props}></div>
}

export default LogoWrapper
