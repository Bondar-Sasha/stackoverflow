import { FC } from 'react'

import styles from './styles/aside.module.css'
import {
  AccountControl,
  ExitControl,
  HomeControl,
  MySnippetsControl,
  PostSnippetControl,
  QuestionsControl,
  UsersControl,
} from '../../../Features'
import { selectorIsAuth, useAppSelector } from '../../../App'

interface AsideProps {
  onClose: () => void
  isOpen: boolean
}

const Aside: FC<AsideProps> = ({ onClose, isOpen }) => {
  const isAuth = useAppSelector(selectorIsAuth)

  return (
    <aside
      className={`flex-col items-center fixed z-5 top-0 left-0 bg-theme ${
        isOpen ? 'flex' : 'hidden'
      } ${styles.aside}`}
    >
      <ExitControl onClick={onClose} className={styles.closeLogo} />
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
