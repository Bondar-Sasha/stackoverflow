import {FC} from 'react'

interface CommentFormProps {
  content: string
}

const CommentForm: FC<CommentFormProps> = ({content}) => {
  return (
    <div className="w-full flex flex-col border-2 border-theme mb-3 p-3">
      <div>
        <span>{content}</span>
      </div>
    </div>
  )
}

export default CommentForm
