import { FC, ReactNode, useLayoutEffect, useState } from 'react'
import { Navigate, useLocation, useParams } from 'react-router-dom'
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

interface RedirectionProps {
  children?: ReactNode
}

const Redirection: FC<RedirectionProps> = ({ children }) => {
  const location = useLocation()
  const params = useParams<Params>()

  const userId = useAppSelector(selectorId)
  const isAuth = useAppSelector(selectorIsAuth)
  const isLoading = useAppSelector(selectorWaitingForAuth)
  const [redirectElem, setRedirectElem] = useState<ReactNode>(children)

  useLayoutEffect(() => {
    if (!isLoading) {
      if (isAuth && location.pathname.includes('auth')) {
        const isManualNavigation =
          !window.history.state || !window.history.state.idx

        if (isManualNavigation) {
          toast('You are already logged in', {
            type: 'warning',
            autoClose: 1800,
          })
        }
        setRedirectElem(<Navigate to="/" replace />)
        return
      }
      if (!isAuth && location.pathname === '/account') {
        toast('Account page is available only for logged in users', {
          type: 'warning',
          autoClose: 2200,
        })
        setRedirectElem(<Navigate to="/auth/login" replace />)
        return
      }
      if (isAuth && String(userId) === params.userId) {
        setRedirectElem(<Navigate to="/account" replace />)
        return
      }

      setRedirectElem(children)
    }
  }, [children, isAuth, isLoading, location.pathname, params.userId, userId])

  return redirectElem
}

export default Redirection
