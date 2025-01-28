import { FC } from 'react'

import styles from './styles/header.module.css'
import {
  HandleLogoutLogo,
  HandleUserLogo,
  HeaderWrapper,
} from '../../../../../Features'

interface AuthenticatedHeaderProps {
  asideHandler?: () => void
}

const AuthenticatedHeader: FC<AuthenticatedHeaderProps> = ({
  asideHandler,
}) => {
  return (
    <HeaderWrapper asideHandler={asideHandler} className={styles.header}>
      {' '}
      <HandleUserLogo className="text-osseous-theme text-xl mr-2 hover:text-gray-200" />
      <HandleLogoutLogo className="text-osseous-theme text-xl hover:text-gray-200" />
    </HeaderWrapper>
  )
}

export default AuthenticatedHeader
