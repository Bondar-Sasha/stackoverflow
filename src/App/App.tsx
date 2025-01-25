import { FC, useEffect } from 'react'
import 'normalize.css'
import AppRoutes from './routes'
import Notifications from './notifications'
import { useGetAuthQuery } from '../Features'
import { setIsAuth, setId, useAppDispatch, setIsLoading } from './redux'
import './styles/index.css'
import { TextLoader } from '../Shared'

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
  const { isLoading, isSuccess, data } = useGetAuthQuery()

  useEffect(() => {
    dispatch(setIsLoading(isLoading))
    if (isSuccess && data) {
      dispatch(setIsAuth(true))
      dispatch(setId(Number(data.data.id)))
    } else {
      dispatch(setIsAuth(false))
      dispatch(setId(-1))
    }
  }, [isSuccess, dispatch, data, isLoading])

  return (
    <>
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <TextLoader className="text-2xl" label="Loading..." />
        </div>
      ) : (
        <Accumulator />
      )}
    </>
  )
}

export default App
