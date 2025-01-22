import { FC, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { selectorId, useAppSelector } from '../../App'

interface Params {
  userId: string
  [key: string]: string
}

const UserToAcc: FC = () => {
  const navigate = useNavigate()
  const params = useParams<Params>()

  const userId = useAppSelector(selectorId)

  useEffect(() => {
    if (String(userId) === params?.userId) {
      navigate('/account', { replace: true })
    }
  }, [userId, navigate, params?.userId])

  return null
}

export default UserToAcc
