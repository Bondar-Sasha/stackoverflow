import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { BasicFooter, Header } from '../../../Widgets'

const SimpleLayoutPage: FC = () => {
  return (
    <>
      <Header type="neutral" asideHandler={() => {}} />
      <main className="w-full h-full flex items-center justify-center flex-grow bg-[rgb(241,241,241)]">
        {' '}
        <Outlet />
      </main>
      <BasicFooter />
    </>
  )
}

export default SimpleLayoutPage
