import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppSelector, selectorUser } from '../../App/redux'

const Auth: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const user = useAppSelector(selectorUser)

  if (user.id !== '-1' && location.pathname.includes('auth'))
    navigate('/', { replace: true })

  return null
}

export default Auth
