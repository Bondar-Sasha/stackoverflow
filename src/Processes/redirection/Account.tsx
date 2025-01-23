import { FC, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { selectorIsAuth, useAppSelector } from '../../App'

const Account: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isAuth = useAppSelector(selectorIsAuth)

  useEffect(() => {
    if (!isAuth && location.pathname === '/account') {
      navigate('/auth/login', { replace: true })

      toast('Account page is available only for logged in users', {
        type: 'warning',
        autoClose: 2200,
      })
    }
  }, [isAuth, location.pathname, navigate])

  return null
}

export default Account
