import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { AsideControlWrapper, UserLogo } from '../../../../Entities'

const AccountControl: FC = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/account')
  }
  return (
    <AsideControlWrapper
      label="My account"
      onClick={handleClick}
      controlledPath="/account"
    >
      <UserLogo />
    </AsideControlWrapper>
  )
}

export default AccountControl
