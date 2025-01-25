import { FC } from 'react'
import { FaRegCircleUser } from 'react-icons/fa6'

interface AnonymousUserProps {
  className?: string
}
const AnonymousUser: FC<AnonymousUserProps> = ({ className = '' }) => {
  return (
    <FaRegCircleUser
      className={`bg-gray-200 text-gray-400 rounded-full ${className}`}
    />
  )
}

export default AnonymousUser
