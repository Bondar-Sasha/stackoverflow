import { FC } from 'react'

import styles from './styles/aside.module.css'
import {
  AccountControl,
  HomeControl,
  MySnippetsControl,
  PostSnippetControl,
  QuestionsControl,
  UsersControl,
} from '../../../Features'
import { selectorIsAuth, useAppSelector } from '../../../App'

const Aside: FC = () => {
  const isAuth = useAppSelector(selectorIsAuth)
  return (
    <aside
      className={`flex flex-col items-center fixed z-5 top-56-px left-0 w-80 bg-theme pt-7 ${styles.aside}`}
    >
      <HomeControl />
      {isAuth && <AccountControl />}
      <PostSnippetControl />
      <MySnippetsControl />
      <QuestionsControl />
      <UsersControl />
    </aside>
  )
}

export default Aside
