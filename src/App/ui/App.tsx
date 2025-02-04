import {FC} from 'react'

import {useGetAuthQuery} from '../../Shared'
import Accumulator from './Accumulator'
import {DownloadMask} from '../../Widgets'

const App: FC = () => {
  const {isLoading} = useGetAuthQuery()

  return isLoading ? <DownloadMask /> : <Accumulator />
}

export default App
