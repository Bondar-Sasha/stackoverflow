import {FC} from 'react'
import 'normalize.css'

import '../styles/index.css'
import {AppRoutes} from '../routes'
import Notifications from '../notifications'

const Accumulator: FC = () => {
  return (
    <>
      <AppRoutes />
      <Notifications />
    </>
  )
}

export default Accumulator
