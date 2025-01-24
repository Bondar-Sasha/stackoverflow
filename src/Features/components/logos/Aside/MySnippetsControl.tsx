import { FC } from 'react'
import { RiTextSnippet } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

import { AsideControlWrapper } from '../../../../Entities'

const MySnippetsControl: FC = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/my_posts')
  }
  return (
    <AsideControlWrapper
      label="My snippets"
      onClick={handleClick}
      controlledPath="/my_posts"
    >
      <RiTextSnippet />
    </AsideControlWrapper>
  )
}

export default MySnippetsControl
