import {FC, ReactNode} from 'react'
import {IoHomeSharp} from 'react-icons/io5'
import {RiTextSnippet} from 'react-icons/ri'
import {GoQuestion} from 'react-icons/go'
import {FaUsers} from 'react-icons/fa6'

import AsideIcon from './AsideIcon'
import {UserLogo} from '../../../../Entities'

interface AsideIconHostProps {
  type:
    | 'home'
    | 'account'
    | 'postSnippet'
    | 'mySnippets'
    | 'questions'
    | 'askQuestion'
    | 'users'
  onClick?: () => void
}

interface IconsDataItem {
  controlledPath: string
  label: string
  icon: ReactNode
}

const iconsData: Record<AsideIconHostProps['type'], IconsDataItem> = {
  home: {controlledPath: '/', label: 'Home', icon: <IoHomeSharp />},
  account: {
    controlledPath: '/account',
    label: 'My account',
    icon: <UserLogo />,
  },
  postSnippet: {
    controlledPath: '/create_post',
    label: 'Post a snippet',
    icon: <RiTextSnippet />,
  },
  mySnippets: {
    controlledPath: '/my_posts',
    label: 'My snippets',
    icon: <RiTextSnippet />,
  },
  questions: {
    controlledPath: '/questions',
    label: 'Questions',
    icon: <GoQuestion />,
  },
  askQuestion: {
    controlledPath: '/create_question',
    label: 'Ask question',
    icon: <GoQuestion />,
  },
  users: {controlledPath: '/users', label: 'Users', icon: <FaUsers />},
}

const AsideIconHost: FC<AsideIconHostProps> = ({type, onClick}) => {
  return <AsideIcon {...iconsData[type]} onClick={onClick} />
}

export default AsideIconHost
