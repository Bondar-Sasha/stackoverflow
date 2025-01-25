import { FC } from 'react'
import { FaUsers } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'

import { AsideItemWrapper } from '../../../../Entities'

const UsersControl: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isDesiredLocation = location.pathname === '/users'

  const handleClick = () => {
    navigate('/users')
  }
  return (
    <AsideItemWrapper
      label="Users"
      onClick={handleClick}
      isChosen={isDesiredLocation}
    >
      <FaUsers />
    </AsideItemWrapper>
  )
}

export default UsersControl
