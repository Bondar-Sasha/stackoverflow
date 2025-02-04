import {FC, useState} from 'react'
import {Outlet} from 'react-router-dom'

import {Aside, BasicFooter, Header} from '../../../Widgets'

import styles from '../styles/layout.module.css'
import {useLinkedGetAuth} from '../../../Shared'

interface LayoutPageProps {
  neutral?: boolean
}

const LayoutPage: FC<LayoutPageProps> = ({neutral}) => {
  const {userId} = useLinkedGetAuth()

  const [asideState, setAsideState] = useState<boolean>(false)
  const asideHandler = () => {
    setAsideState((prev) => !prev)
  }

  const PreparedHeader = userId ? (
    <Header type="auth" asideHandler={asideHandler} />
  ) : neutral ? (
    <Header type="neutral" />
  ) : (
    <Header type="unauth" asideHandler={asideHandler} />
  )

  return (
    <>
      {PreparedHeader}
      <main className={`w-full flex-center flex-grow ${styles.main}`}>
        <Aside isOpen={asideState} onClose={asideHandler} />
        <Outlet />
      </main>
      <BasicFooter />
    </>
  )
}

export default LayoutPage
