import {FC} from 'react'
import {useNavigate} from 'react-router-dom'
import {FaRegUser} from 'react-icons/fa6'
import {MdOutlineLogout} from 'react-icons/md'
import {toast} from 'react-toastify'

import styles from './styles/header.module.css'
import {HeaderWrapper} from '@/Features'
import {Errors, Spinner, useLogoutMutation} from '@/Shared'

interface AuthenticatedHeaderProps {
  asideHandler?: () => void
}

const AuthenticatedHeader: FC<AuthenticatedHeaderProps> = ({asideHandler}) => {
  const navigate = useNavigate()
  const [logout, {isLoading}] = useLogoutMutation()

  const handleLogout = async () => {
    try {
      await logout().unwrap()
      toast('You have successfully logged out', {
        type: 'success',
        autoClose: 1900,
      })
    } catch (err) {
      toast((err as Errors.SimpleError).message, {
        type: 'error',
        autoClose: 1900,
      })
    }
  }
  return (
    <HeaderWrapper
      asideHandler={asideHandler}
      classNames={{header: styles.header, appName: styles.appName}}
    >
      <FaRegUser
        onClick={() => navigate('/account')}
        className={`cursor-pointer text-osseous-theme text-xl mr-2 hover:text-gray-200`}
      />
      {isLoading ? (
        <Spinner className="text-xl" />
      ) : (
        <MdOutlineLogout
          onClick={handleLogout}
          className={`cursor-pointer text-osseous-theme text-xl hover:text-gray-200`}
        />
      )}
    </HeaderWrapper>
  )
}

export default AuthenticatedHeader
