import { FC } from 'react'
import { RiTextSnippet } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

import { AsideControlWrapper } from '../../../../Entities'

const PostSnippetControl: FC = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/create_post')
  }
  return (
    <AsideControlWrapper
      label="Post snippet"
      onClick={handleClick}
      controlledPath="/create_post"
    >
      <RiTextSnippet />
    </AsideControlWrapper>
  )
}

export default PostSnippetControl
