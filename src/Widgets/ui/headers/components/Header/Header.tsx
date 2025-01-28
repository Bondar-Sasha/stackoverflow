import { FC } from 'react'
import AuthenticatedHeader from '../AuthenticatedHeader/AuthenticatedHeader'
import UnauthenticatedHeader from '../UnauthenticatedHeader/UnauthenticatedHeader'
import NeutralHeader from '../NeutralHeader/NeutralHeader'

interface HeaderProps {
  type: 'auth' | 'unauth' | 'neutral'
  asideHandler?: () => void
}

const getHeader = ({ type, ...props }: HeaderProps) => {
  const HeadersMap = {
    auth: <AuthenticatedHeader {...props} />,
    unauth: <UnauthenticatedHeader {...props} />,
    neutral: <NeutralHeader {...props} />,
  }
  return HeadersMap[type]
}

const Header: FC<HeaderProps> = (props) => {
  return getHeader(props)
}

export default Header
