import {FC} from 'react'
import {Outlet} from 'react-router-dom'

import {BasicFooter, Header} from '../../../Widgets'

const SimpleLayoutPage: FC = () => {
  return (
    <>
      <Header type="neutral" asideHandler={() => {}} />
      <main className="stretching flex-center flex-grow bg-gray-100 mt-14">
        <Outlet />
      </main>
      <BasicFooter />
    </>
  )
}

export default SimpleLayoutPage
