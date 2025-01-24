import { FC, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { selectorIsAuth, useAppSelector } from '../../App'

const Auth: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isAuth = useAppSelector(selectorIsAuth)

  useEffect(() => {
    if (isAuth && location.pathname.includes('auth')) {
      navigate('/', { replace: true })

      const isManualNavigation =
        !window.history.state || !window.history.state.idx
      console.log(window.history.state, window.history.state.idx)

      if (isManualNavigation) {
        toast('You are already logged in', {
          type: 'warning',
          autoClose: 1800,
        })
      }
    }
  }, [isAuth, location.pathname, navigate])

  return null
}

export default Auth
