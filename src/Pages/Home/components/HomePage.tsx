import { FC } from 'react'

import { AuthenticatedHeader, UnauthenticatedHeader } from '../../../Widgets'
import { selectorIsAuth, useAppSelector } from '../../../App'

const HomePage: FC = () => {
  const isAuth = useAppSelector(selectorIsAuth)

  return <>{isAuth ? <AuthenticatedHeader /> : <UnauthenticatedHeader />}</>
}

export default HomePage
