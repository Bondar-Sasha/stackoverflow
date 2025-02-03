import {FC} from 'react'
import {AnonymousUser} from '../../../../Entities'
import {Link} from 'react-router-dom'

interface UserFormProps {
  username: string
  userId: string
  role: string
}

const UserForm: FC<UserFormProps> = ({username, role, userId}) => {
  return (
    <div className="flex flex-col w-4/5 mb-7">
      <AnonymousUser className="min-w-10 min-h-10" />
      <div className="w-full flex items-center mb-2">
        <span>
          <span className="mr-2 italic">username:</span>
          {
            <Link
              className="text-theme cursor-pointer hover:underline"
              to={`/users/${userId}`}
            >
              {username}
            </Link>
          }
        </span>
        <span className="text-justify font-bold text-lg">{role}</span>
      </div>
    </div>
  )
}

export default UserForm
