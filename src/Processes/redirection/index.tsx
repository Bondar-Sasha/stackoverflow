import { FC, useLayoutEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import {
  selectorId,
  selectorIsAuth,
  selectorWaitingForAuth,
  useAppSelector,
} from '../../App'
import { toast } from 'react-toastify'

interface Params {
  userId: string
  [key: string]: string
}

const Redirection: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams<Params>()

  const userId = useAppSelector(selectorId)
  const isAuth = useAppSelector(selectorIsAuth)
  const isLoading = useAppSelector(selectorWaitingForAuth)

  useLayoutEffect(() => {
    if (!isLoading) {
      if (isAuth && location.pathname.includes('auth')) {
        navigate('/', { replace: true })
        const isManualNavigation =
          !window.history.state || !window.history.state.idx
        if (isManualNavigation) {
          toast('You are already logged in', {
            type: 'warning',
            autoClose: 1800,
          })
        }
        return
      }
      if (!isAuth && location.pathname === '/account') {
        navigate('/auth/login', { replace: true })
        toast('Account page is available only for logged in users', {
          type: 'warning',
          autoClose: 2200,
        })
        return
      }
      if (isAuth && String(userId) === params?.userId) {
        navigate('/account', { replace: true })
        return
      }
    }
  }, [isAuth, isLoading, location.pathname, navigate, params?.userId, userId])
  return null
}

export default Redirection
