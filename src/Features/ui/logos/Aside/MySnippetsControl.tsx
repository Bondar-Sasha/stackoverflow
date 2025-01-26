import { FC } from 'react'
import { RiTextSnippet } from 'react-icons/ri'
import { useLocation, useNavigate } from 'react-router-dom'

import { AsideItemWrapper } from '../../../../Entities'

const MySnippetsControl: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isDesiredLocation = location.pathname === '/my_posts'

  const handleClick = () => {
    navigate('/my_posts')
  }
  return (
    <AsideItemWrapper
      label="My snippets"
      onClick={handleClick}
      isChosen={isDesiredLocation}
    >
      <RiTextSnippet />
    </AsideItemWrapper>
  )
}

export default MySnippetsControl
