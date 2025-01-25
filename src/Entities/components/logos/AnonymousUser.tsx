import { FC } from 'react'
import { FaRegCircleUser } from 'react-icons/fa6'

import { LogoWrapper } from '../../../Shared'

interface AnonymousUserProps {
  className?: string
  onClick?: () => void
}
const AnonymousUser: FC<AnonymousUserProps> = (props) => {
  return (
    <LogoWrapper {...props}>
      {' '}
      <FaRegCircleUser className="" />
    </LogoWrapper>
  )
}

export default AnonymousUser
