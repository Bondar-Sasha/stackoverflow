import { FC } from 'react'

import styles from './styles/header.module.css'
import {
  HeaderWrapper,
  LoginButton,
  SingUpButton,
} from '../../../../../Features'

interface UnauthenticatedHeaderProps {
  asideHandler?: () => void
}

const UnauthenticatedHeader: FC<UnauthenticatedHeaderProps> = ({
  asideHandler,
}) => {
  return (
    <HeaderWrapper asideHandler={asideHandler} className={styles.header}>
      <LoginButton />
      <SingUpButton className="ml-1" />
    </HeaderWrapper>
  )
}

export default UnauthenticatedHeader
