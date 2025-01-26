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
      <HandleUserLogo className="text-osseous-theme text-xl mr-2 hover:text-gray-200" />
      <HandleLogoutLogo className="text-osseous-theme text-xl hover:text-gray-200" />
    </HeaderWrapper>
  )
}

export default AuthenticatedHeader
