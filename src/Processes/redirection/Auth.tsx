import { FC, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../App/redux/hooks/hooks'
import {
  selectorIsLogin,
  selectorIsRegistered,
} from '../../App/redux/slices/auth.slice'

const Auth: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isRegistered = useAppSelector(selectorIsRegistered)
  const isLogin = useAppSelector(selectorIsLogin)

  useEffect(() => {
    if (isLogin && location.pathname.includes('auth')) navigate('/')
  }, [isLogin, location.pathname, navigate])

  useEffect(() => {
    if (!isLogin && isRegistered) navigate('/auth/login')
  }, [isRegistered, isLogin, location.pathname, navigate])

  return null
}

export default Auth
