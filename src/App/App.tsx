import { FC } from 'react'

import AppRoutes from './routes/Routes'
import Notifications from './notifications'
import InitPreparations from './initialPreparations'

const App: FC = () => {
  return (
    <>
      <InitPreparations />
      <AppRoutes />
      <Notifications />
    </>
  )
}

export default App
