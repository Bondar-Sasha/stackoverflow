import { FC } from 'react'
import { GoQuestion } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'

import { AsideControlWrapper } from '../../../../Entities'

const QuestionsControl: FC = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/questions')
  }
  return (
    <AsideControlWrapper
      label="Questions"
      onClick={handleClick}
      controlledPath="/questions"
    >
      <GoQuestion />
    </AsideControlWrapper>
  )
}

export default QuestionsControl
