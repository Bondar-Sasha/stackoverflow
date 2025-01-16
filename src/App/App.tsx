import { FC } from 'react'

import AppRoutes from './routes/Routes'
import Notifications from './notifications'

const App: FC = () => {
  return (
    <>
      <AppRoutes />
      <Notifications />
    </>
  )
}

export default App
