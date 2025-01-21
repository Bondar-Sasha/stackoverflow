import { FC, useEffect } from 'react'
import 'normalize.css'
import AppRoutes from './routes'
import Notifications from './notifications'
import { userApiController } from '../Features'
import { setIsAuth, useAppDispatch } from './redux'
import './styles/index.css'

const Accumulator: FC = () => {
  return (
    <>
      <AppRoutes />
      <Notifications />
    </>
  )
}

const { getAuthControls } = userApiController

const App: FC = () => {
  const dispatch = useAppDispatch()
  const { isLoading, isSuccess } = getAuthControls()

  useEffect(() => {
    if (isSuccess) {
      dispatch(setIsAuth(true))
    } else {
      dispatch(setIsAuth(false))
    }
  }, [isSuccess, dispatch])

  return <>{isLoading ? <div>loading...</div> : <Accumulator />}</>
}

export default App
