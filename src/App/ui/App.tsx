import {FC, useEffect} from 'react'

import {setIsAuth, setId, useAppDispatch, setWaitingForAuth} from '../redux'
import {useGetAuthQuery} from '../../Shared'
import Accumulator from './Accumulator'
import {DownloadMask} from '../../Widgets'

const App: FC = () => {
  const dispatch = useAppDispatch()
  const {isLoading, isSuccess, data} = useGetAuthQuery()
  useEffect(() => {
    dispatch(setWaitingForAuth(isLoading))
    if (isSuccess && data) {
      dispatch(setIsAuth(true))
      dispatch(setId(Number(data.data.id)))
    } else {
      dispatch(setIsAuth(false))
      dispatch(setId(null))
    }
  }, [data, dispatch, isLoading, isSuccess])

  return isLoading ? <DownloadMask /> : <Accumulator />
}

export default App
