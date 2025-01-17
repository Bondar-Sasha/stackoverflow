import { FC, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  useAppSelector,
  selectorIsLogin,
  selectorIsRegistered,
} from '../../App/redux'

const Auth: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isRegistered = useAppSelector(selectorIsRegistered)
  const isLogin = useAppSelector(selectorIsLogin)

  useEffect(() => {
    if (isLogin && location.pathname.includes('auth')) {
      navigate('/', { replace: true })
      return
    }

    if (isRegistered && location.pathname === '/auth/registration') {
      navigate('/auth/login', { replace: true })
    }
  }, [isLogin, isRegistered, location.pathname, navigate])

  return null
}

export default Auth
