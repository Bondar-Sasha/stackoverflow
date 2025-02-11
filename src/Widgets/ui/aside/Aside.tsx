import {FC} from 'react'
import {useNavigate} from 'react-router-dom'
import {RiTextSnippet} from 'react-icons/ri'
import {GoQuestion} from 'react-icons/go'
import {FaUsers} from 'react-icons/fa6'
import {RxCross2} from 'react-icons/rx'
import {IoHomeSharp} from 'react-icons/io5'
import {FaRegUser} from 'react-icons/fa'

import styles from './styles/aside.module.css'
import {useLinkedGetAuth} from '@/Shared'

interface AsideProps {
  onClose?: () => void
  isOpen: boolean
}

const iconsData = [
  {id: 1, controlledPath: '/', label: 'Home', icon: <IoHomeSharp />},
  {
    id: 2,
    controlledPath: '/account',
    label: 'My account',
    icon: <FaRegUser />,
    auth: true,
  },
  {
    id: 3,
    controlledPath: '/create_post',
    label: 'Post a snippet',
    icon: <RiTextSnippet />,
    auth: true,
  },
  {
    id: 4,
    controlledPath: '/my_posts',
    label: 'My snippets',
    icon: <RiTextSnippet />,
    auth: true,
  },
  {
    id: 5,
    controlledPath: '/questions',
    label: 'Questions',
    icon: <GoQuestion />,
  },
  {
    id: 6,
    controlledPath: '/create_question',
    label: 'Ask question',
    icon: <GoQuestion />,
    auth: true,
  },
  {id: 7, controlledPath: '/users', label: 'Users', icon: <FaUsers />},
]

const Aside: FC<AsideProps> = ({onClose, isOpen}) => {
  const navigate = useNavigate()
  const {userId} = useLinkedGetAuth()

  return (
    <aside
      className={`flex-col items-center fixed z-40 top-0 left-0 bg-theme ${
        isOpen ? 'flex' : 'hidden'
      } ${styles.aside}`}
    >
      <div
        className={`flex items-center mr-10 w-full h-11 justify-end text-osseous-theme transition duration-100 ease-in-out ${styles.closeLogo}`}
      >
        <RxCross2 onClick={onClose} className="text-xl" />
      </div>
      {iconsData.map((item) => {
        if (item.auth && !userId) {
          return
        }
        return (
          <div
            key={item.id}
            className="flex items-center w-full h-11 pl-5 cursor-pointer text-osseous-theme hover:bg-[rgb(60,130,195)] transition duration-100 ease-in-out"
            onClick={() => {
              onClose?.()
              navigate(item.controlledPath)
            }}
          >
            {item.icon} <span className="ml-2">{item.label}</span>
          </div>
        )
      })}
    </aside>
  )
}

export default Aside
