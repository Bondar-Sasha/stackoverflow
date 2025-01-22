import { FC } from 'react'

import Auth from './Auth'
import Account from './Account'
import UserToAcc from './UserToAcc'

const Redirection: FC = () => {
  return (
    <>
      <UserToAcc />
      <Account />
      <Auth />
    </>
  )
}

export default Redirection
