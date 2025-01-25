import { FC } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { LogoWrapper } from '../../../Shared'

interface TrashLogoProps {
  className?: string
  onClick?: () => void
}

const TrashLogo: FC<TrashLogoProps> = (props) => {
  return (
    <LogoWrapper {...props}>
      {' '}
      <FaRegTrashAlt className="cursor-pointer color-inherit hover:text-color-for-hover" />
    </LogoWrapper>
  )
}

export default TrashLogo
