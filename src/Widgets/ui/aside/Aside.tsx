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
      className={`flex-col items-center fixed z-40 top-0 left-0 bg-theme ${
        isOpen ? 'flex' : 'hidden'
      } ${styles.aside}`}
    >
      <ExitControl onClick={onClose} className={styles.closeLogo} />
      <HomeControl onClick={onClose} />
      {isAuth && <AccountControl onClick={onClose} />}
      {isAuth && <PostSnippetControl onClick={onClose} />}
      {isAuth && <MySnippetsControl onClick={onClose} />}
      <QuestionsControl onClick={onClose} />
      <UsersControl onClick={onClose} />
    </aside>
  )
}

export default Aside
