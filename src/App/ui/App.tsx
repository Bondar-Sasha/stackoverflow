import { FC, useEffect } from 'react'

import { setIsAuth, setId, useAppDispatch, setWaitingForAuth } from '../redux'
import { TextLoader, useGetAuthQuery } from '../../Shared'
import Accumulator from './Accumulator'

const App: FC = () => {
  const dispatch = useAppDispatch()
  const { isLoading, isSuccess, data } = useGetAuthQuery()

  useEffect(() => {
    dispatch(setWaitingForAuth(isLoading))
    if (isSuccess && data) {
      dispatch(setIsAuth(true))
      dispatch(setId(Number(data.data.id)))
    } else {
      dispatch(setIsAuth(false))
      dispatch(setId(null))
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
