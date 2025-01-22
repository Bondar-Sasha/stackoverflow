import { FC, useEffect } from 'react'
import 'normalize.css'
import AppRoutes from './routes'
import Notifications from './notifications'
import { userApiController } from '../Features'
import { setIsAuth, setId, useAppDispatch } from './redux'
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
  const { isLoading, isSuccess, data } = getAuthControls()

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setIsAuth(true))
      dispatch(setId(Number(data.data.id)))
    } else {
      dispatch(setIsAuth(false))
      dispatch(setId(-1))
    }
  }, [isSuccess, dispatch, data])

  return <>{isLoading ? <div>loading...</div> : <Accumulator />}</>
}

export default App
