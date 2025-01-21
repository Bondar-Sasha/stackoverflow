import { FC, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { selectorIsAuth, useAppSelector } from '../../App'

const Auth: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isAuth = useAppSelector(selectorIsAuth)

  useEffect(() => {
    if (isAuth && location.pathname.includes('auth')) {
      navigate('/', { replace: true })
    }
  }, [isAuth, location.pathname, navigate])

  return null
}

export default Auth
