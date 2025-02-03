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
    <div className="flex items-center w-4/5 mb-7 border-theme border-2 p-2">
      <AnonymousUser className="min-w-10 min-h-10 mr-3" />
      <div className="w-full flex flex-col mb-2">
        <span>
          <span className="mr-2 italic ">username:</span>
          {
            <Link
              className="text-theme cursor-pointer hover:underline"
              to={`/users/${userId}`}
            >
              {username}
            </Link>
          }
        </span>
        <span className="text-lg">
          <span className="mr-2 italic">id:</span>
          <span>{userId}</span>
        </span>
        <span className="text-lg">
          <span className="mr-2 italic">role:</span>
          {role}
        </span>
      </div>
    </div>
  )
}

export default UserForm
