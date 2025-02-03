import { FC } from 'react'
import { FaUsers } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'

import { AsideItemWrapper } from '../../../../Entities'

interface ControlProps {
  onClick?: () => void
}

const UsersControl: FC<ControlProps> = ({ onClick }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const isDesiredLocation = location.pathname === '/users'

  const handleClick = () => {
    navigate('/users')
    if (onClick) onClick()
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
