import {FC} from 'react'
import {useNavigate} from 'react-router-dom'

import styles from './styles/header.module.css'
import {HeaderWrapper} from '@/Features'
import {BasicButton} from '@/Shared'

interface UnauthenticatedHeaderProps {
  asideHandler?: () => void
}

const UnauthenticatedHeader: FC<UnauthenticatedHeaderProps> = ({
  asideHandler,
}) => {
  const navigate = useNavigate()

  return (
    <HeaderWrapper
      asideHandler={asideHandler}
      classNames={{
        appName: styles.appName,
        headerButtons: styles.headerButtons,
      }}
    >
      <BasicButton
        onClick={() => {
          navigate('/auth/login')
        }}
        className="bg-osseous-theme rounded-full w-28 ordinary-text-theme hover:bg-gray-200 mr-2"
      >
        Log in
      </BasicButton>
      <BasicButton
        onClick={() => {
          navigate('/auth/registration')
        }}
        className="bg-osseous-theme rounded-full w-28 ordinary-text-theme hover:bg-gray-200 mr-2"
      >
        Sing up
      </BasicButton>
    </HeaderWrapper>
  )
}

export default UnauthenticatedHeader
