import { FC } from 'react'
import { RiTextSnippet } from 'react-icons/ri'
import { useLocation, useNavigate } from 'react-router-dom'

import { AsideItemWrapper } from '../../../../Entities'

interface ControlProps {
  onClick?: () => void
}

const PostSnippetControl: FC<ControlProps> = ({ onClick }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const isDesiredLocation = location.pathname === '/create_post'

  const handleClick = () => {
    navigate('/create_post')
    if (onClick) onClick()
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
