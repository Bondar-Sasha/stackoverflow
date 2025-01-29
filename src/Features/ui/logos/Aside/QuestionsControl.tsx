import { FC } from 'react'
import { GoQuestion } from 'react-icons/go'
import { useLocation, useNavigate } from 'react-router-dom'

import { AsideItemWrapper } from '../../../../Entities'

interface ControlProps {
  onClick?: () => void
}

const QuestionsControl: FC<ControlProps> = ({ onClick }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const isDesiredLocation = location.pathname === '/questions'

  const handleClick = () => {
    navigate('/questions')
    if (onClick) onClick()
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
