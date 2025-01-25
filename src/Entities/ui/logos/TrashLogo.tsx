import { FC } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

interface TrashLogoProps {
  className?: string
  onClick?: () => void
}

const TrashLogo: FC<TrashLogoProps> = ({ className = '', onClick }) => {
  return (
    <FaRegTrashAlt
      onClick={onClick}
      className={`cursor-pointer ${className}`}
    />
  )
}

export default TrashLogo
