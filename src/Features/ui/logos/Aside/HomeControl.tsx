import { FC } from 'react'
import { IoHomeSharp } from 'react-icons/io5'
import { useLocation, useNavigate } from 'react-router-dom'

import { AsideItemWrapper } from '../../../../Entities'

interface ControlProps {
  onClick?: () => void
}

const HomeControl: FC<ControlProps> = ({ onClick }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const isDesiredLocation = location.pathname === '/'

  const handleClick = () => {
    navigate('/')
    if (onClick) onClick()
  }
  return (
    <AsideItemWrapper
      label="Home"
      onClick={handleClick}
      isChosen={isDesiredLocation}
    >
      <IoHomeSharp />
    </AsideItemWrapper>
  )
}

export default HomeControl
