import { FC } from 'react'
import { IoHomeSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

import { AsideControlWrapper } from '../../../../Entities'

const HomeControl: FC = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }
  return (
    <AsideControlWrapper label="Home" onClick={handleClick} controlledPath="/">
      <IoHomeSharp />
    </AsideControlWrapper>
  )
}

export default HomeControl
