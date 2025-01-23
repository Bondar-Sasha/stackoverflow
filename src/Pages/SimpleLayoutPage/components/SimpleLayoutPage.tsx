import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { BasicFooter, NeutralHeader } from '../../../Widgets'

const SimpleLayoutPage: FC = () => {
  return (
    <>
      <NeutralHeader />
      <main className="w-full h-full flex items-start justify-center flex-grow bg-gray-200">
        <Outlet />
      </main>
      <BasicFooter />
    </>
  )
}

export default SimpleLayoutPage
