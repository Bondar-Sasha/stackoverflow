import { FC } from 'react'

import {
  HandleLogoutLogo,
  HandleUserLogo,
  HeaderWrapper,
} from '../../../../../Features'

const AuthenticatedHeader: FC = () => {
  return (
    <HeaderWrapper>
      {' '}
      <HandleUserLogo className="text-osseous-theme text-xl mr-2 hover:text-color-for-color" />
      <HandleLogoutLogo className="text-osseous-theme text-xl hover:text-color-for-color" />
    </HeaderWrapper>
  )
}

export default AuthenticatedHeader
