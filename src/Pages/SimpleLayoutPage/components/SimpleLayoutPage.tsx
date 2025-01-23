import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { BasicFooter, NeutralHeader } from '../../../Widgets'

const SimpleLayoutPage: FC = () => {
  return (
    <>
      <NeutralHeader />
      <main className="w-full h-full flex items-center justify-center flex-grow bg-[rgb(241,241,241)]">
        {' '}
        <Outlet />
      </main>
      <BasicFooter />
    </>
  )
}

export default SimpleLayoutPage
