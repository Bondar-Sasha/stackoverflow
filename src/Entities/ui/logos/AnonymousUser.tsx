import {FC} from 'react'
import {FaRegCircleUser} from 'react-icons/fa6'

interface AnonymousUserProps {
  className?: string
}
const AnonymousUser: FC<AnonymousUserProps> = ({className = ''}) => {
  return (
    <div className={`bg-gray-200 text-gray-400 rounded-full ${className}`}>
      <FaRegCircleUser className="text-inherit stretching" />
    </div>
  )
}

export default AnonymousUser
