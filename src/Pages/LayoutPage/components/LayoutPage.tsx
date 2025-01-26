import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import {
  Aside,
  AuthenticatedHeader,
  BasicFooter,
  NeutralHeader,
  UnauthenticatedHeader,
} from '../../../Widgets'
import { selectorIsAuth, useAppSelector } from '../../../App'

import styles from '../styles/layout.module.css'

interface LayoutPageProps {
  neutral?: boolean
}

const LayoutPage: FC<LayoutPageProps> = ({ neutral }) => {
  const isAuth = useAppSelector(selectorIsAuth)

  const PreparedHeader = isAuth ? (
    <AuthenticatedHeader />
  ) : neutral ? (
    <NeutralHeader />
  ) : (
    <UnauthenticatedHeader />
  )

  return (
    <>
      {PreparedHeader}
      <main className={`w-full flex flex-grow ${styles.main}`}>
        <Aside />
        <Outlet />
      </main>
      <BasicFooter />
    </>
  )
}

export default LayoutPage
