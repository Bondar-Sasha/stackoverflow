import {FC} from 'react'
import {Link, useNavigate} from 'react-router-dom'

import {Editor} from '../../../../Entities'
import {AnonymousUser} from '../../../../Entities'
import {useLinkedGetAuth} from '../../../../Shared'
import {BasicButton} from '../../../../Shared'

interface QuestionFormProps {
  title: string
  username: string
  userId: string
  className?: string
  description?: string
  attachedCode?: string
}

const QuestionForm: FC<QuestionFormProps> = ({
  title,
  username,
  userId,
  description,
  attachedCode,
  className = '',
}) => {
  const authData = useLinkedGetAuth()
  const navigate = useNavigate()

  return (
    <div className={`flex flex-col w-3/4 ${className}`}>
      <div className="flex items-center mb-2">
        <AnonymousUser className="min-w-10 min-h-10" />
        <div className="flex flex-col ml-3">
          <span className="text-justify font-bold text-lg">{title}</span>
          <span>
            <span className="mr-2 italic">asked by user:</span>

            {
              <Link
                className="text-theme cursor-pointer hover:underline"
                to={`/users/${userId}`}
              >
                {username}
              </Link>
            }
          </span>
        </div>
      </div>
      {description && <div className="mb-2 text-justify">{description}</div>}
      {attachedCode && (
        <Editor
          readOnly
          language="javascript"
          className="w-full mb-2"
          value={attachedCode}
          onChange={() => {}}
        />
      )}
      {authData.userId === userId && (
        <BasicButton
          onClick={() => {
            navigate(`/edit_question/${userId}`)
          }}
          className={`flex items-center justify-center bg-theme max-w-24 text-osseous-theme`}
        >
          edit
        </BasicButton>
      )}
    </div>
  )
}

export default QuestionForm
