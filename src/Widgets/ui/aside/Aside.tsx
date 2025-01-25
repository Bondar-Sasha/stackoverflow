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
      className={`flex flex-col items-center fixed z-5 top-0 left-0 w-80 bg-theme pt-20 ${styles.aside}`}
    >
      <HomeControl />
      {isAuth && <AccountControl />}
      <PostSnippetControl />
      {isAuth && <MySnippetsControl />}
      <QuestionsControl />
      <UsersControl />
    </aside>
  )
}

export default Aside
