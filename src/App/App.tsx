import { FC } from 'react'

import AppRoutes from './routes/Routes'
import Notifications from './notifications'
import InitPreparations from './initialPreparations'
import { userApiControls } from '../Features'
import { UI } from '../Shared'

const { getMeControls } = userApiControls.userApiController

const App: FC = () => {
  const { isLoading } = getMeControls()

  return (
    <>
      {isLoading ? (
        <UI.TextLoader />
      ) : (
        <>
          <InitPreparations />
          <AppRoutes />
          <Notifications />
        </>
      )}
    </>
  )
}

export default App
