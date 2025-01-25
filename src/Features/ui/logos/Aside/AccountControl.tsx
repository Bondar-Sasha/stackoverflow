import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { AsideItemWrapper, UserLogo } from '../../../../Entities'

const AccountControl: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isDesiredLocation = location.pathname === '/account'

  const handleClick = () => {
    navigate('/account')
  }
  return (
    <AsideItemWrapper
      label="My account"
      onClick={handleClick}
      isChosen={isDesiredLocation}
    >
      <UserLogo />
    </AsideItemWrapper>
  )
}

export default AccountControl
