import {FC} from 'react'

import styles from './styles/header.module.css'
import {HeaderWrapper, SimpleRedirectingButton} from '../../../../../Features'

interface UnauthenticatedHeaderProps {
  asideHandler?: () => void
}

const UnauthenticatedHeader: FC<UnauthenticatedHeaderProps> = ({
  asideHandler,
}) => {
  return (
    <HeaderWrapper asideHandler={asideHandler} className={styles.header}>
      <SimpleRedirectingButton type="login" className="mr-2" />
      <SimpleRedirectingButton type="singUp" />
    </HeaderWrapper>
  )
}

export default UnauthenticatedHeader
