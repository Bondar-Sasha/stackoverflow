import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { AsideItemWrapper, UserLogo } from '../../../../Entities'

interface ControlProps {
  onClick?: () => void
}

const AccountControl: FC<ControlProps> = ({ onClick }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const isDesiredLocation = location.pathname === '/account'

  const handleClick = () => {
    navigate('/account')
    if (onClick) onClick()
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
