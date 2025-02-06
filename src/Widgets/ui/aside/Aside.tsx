import {FC} from 'react'

import styles from './styles/aside.module.css'
import {AsideIconHost, ExitControl} from '../../../Features'
import {useLinkedGetAuth} from '../../../Shared'

interface AsideProps {
  onClose: () => void
  isOpen: boolean
}

const Aside: FC<AsideProps> = ({onClose, isOpen}) => {
  const {userId} = useLinkedGetAuth()

  return (
    <aside
      className={`flex-col items-center fixed z-40 top-0 left-0 bg-theme ${
        isOpen ? 'flex' : 'hidden'
      } ${styles.aside}`}
    >
      <ExitControl onClick={onClose} className={styles.closeLogo} />
      <AsideIconHost type="home" onClick={onClose} />
      {userId && <AsideIconHost type="account" onClick={onClose} />}
      {userId && <AsideIconHost type="postSnippet" onClick={onClose} />}
      {userId && <AsideIconHost type="mySnippets" onClick={onClose} />}
      <AsideIconHost type="questions" onClick={onClose} />
      {userId && <AsideIconHost type="askQuestion" onClick={onClose} />}
      <AsideIconHost type="users" onClick={onClose} />
    </aside>
  )
}

export default Aside
