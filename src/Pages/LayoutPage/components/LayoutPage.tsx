import {FC, ReactNode, useState} from 'react'
import {Outlet} from 'react-router-dom'

import {
  Aside,
  BasicFooter,
  AuthenticatedHeader,
  UnauthenticatedHeader,
  NeutralHeader,
} from '@/Widgets'

import styles from '../styles/layout.module.css'
import {useLinkedGetAuth} from '@/Shared'

interface LayoutPageProps {
  neutral?: boolean
}

const LayoutPage: FC<LayoutPageProps> = ({neutral}) => {
  const {userId} = useLinkedGetAuth()

  const [asideState, setAsideState] = useState<boolean>(false)
  const asideHandler = () => {
    setAsideState((prev) => !prev)
  }

  const getHeader = (
    first_key: boolean
  ): ((second_key: boolean) => ReactNode) => {
    return (second_key) => {
      if (first_key) {
        return <AuthenticatedHeader asideHandler={asideHandler} />
      }
      return second_key ? (
        <NeutralHeader />
      ) : (
        <UnauthenticatedHeader asideHandler={asideHandler} />
      )
    }
  }

  return (
    <>
      {getHeader(!!userId)(!!neutral)}
      <main className={`w-full flex-center flex-grow ${styles.main}`}>
        <Aside isOpen={asideState} onClose={asideHandler} />
        <Outlet />
      </main>
      <BasicFooter />
    </>
  )
}

export default LayoutPage
