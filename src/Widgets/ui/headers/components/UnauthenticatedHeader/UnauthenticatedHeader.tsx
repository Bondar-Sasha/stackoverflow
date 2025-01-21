import { FC } from 'react'

import {
  HeaderWrapper,
  LoginButton,
  SingUpButton,
} from '../../../../../Features'

const UnauthenticatedHeader: FC = () => {
  return (
    <HeaderWrapper>
      <LoginButton />
      <SingUpButton className="ml-1" />
    </HeaderWrapper>
  )
}

export default UnauthenticatedHeader
