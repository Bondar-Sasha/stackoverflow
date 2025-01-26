import { FC } from 'react'
import { GoQuestion } from 'react-icons/go'
import { useLocation, useNavigate } from 'react-router-dom'

import { AsideItemWrapper } from '../../../../Entities'

const QuestionsControl: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isDesiredLocation = location.pathname === '/questions'

  const handleClick = () => {
    navigate('/questions')
  }
  return (
    <AsideItemWrapper
      label="Questions"
      onClick={handleClick}
      isChosen={isDesiredLocation}
    >
      <GoQuestion />
    </AsideItemWrapper>
  )
}

export default QuestionsControl
