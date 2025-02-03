import {FC} from 'react'

interface QuestionProps {
  title: string
  description: string
  attachedCode: string
  user: {
    username: string
    role: string
  }
  isResolved: boolean
}

const Question: FC<QuestionProps> = () => {
  return <div>Question:FC</div>
}

export default Question
