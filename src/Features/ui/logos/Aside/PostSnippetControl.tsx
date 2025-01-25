import { FC } from 'react'
import { RiTextSnippet } from 'react-icons/ri'
import { useLocation, useNavigate } from 'react-router-dom'

import { AsideItemWrapper } from '../../../../Entities'

const PostSnippetControl: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isDesiredLocation = location.pathname === '/create_post'

  const handleClick = () => {
    navigate('/create_post')
  }
  return (
    <AsideItemWrapper
      label="Post snippet"
      onClick={handleClick}
      isChosen={isDesiredLocation}
    >
      <RiTextSnippet />
    </AsideItemWrapper>
  )
}

export default PostSnippetControl
