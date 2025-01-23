import { FC } from 'react'
import { FaUsers } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import { AsideControlWrapper } from '../../../../Entities'

const UsersControl: FC = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/users')
  }
  return (
    <AsideControlWrapper
      label="Users"
      onClick={handleClick}
      controlledPath="/users"
    >
      <FaUsers />
    </AsideControlWrapper>
  )
}

export default UsersControl
