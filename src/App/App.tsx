import { FC } from 'react'
import 'normalize.css'

import './styles/index.css'
import AppRoutes from './routes'
import Notifications from './notifications'
import { getItem } from '../Shared'
import { userApiController } from '../Features'
import { setUser, useAppDispatch } from './redux'

const { getUserControls } = userApiController

const Accumulator: FC = () => {
  return (
    <>
      <AppRoutes />
      <Notifications />
    </>
  )
}

const App: FC = () => {
  const dispatch = useAppDispatch()
  const userId = getItem('userId')

  if (!userId) return <Accumulator />

  const { isLoading, isSuccess, data } = getUserControls({ id: Number(userId) })

  if (isSuccess && data) dispatch(setUser(data.data))

  return <>{isLoading ? <div>loading...</div> : <Accumulator />}</>
}
export default App
