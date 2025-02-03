import {FC} from 'react'
import {Editor} from '../../../../Widgets'
import {AnonymousUser} from '../../../../Entities'
import {Link} from 'react-router-dom'

interface QuestionFormProps {
  title: string
  author: string
  userId: string
  description?: string
  attachedCode?: string
}

const QuestionForm: FC<QuestionFormProps> = ({
  title,
  author,
  userId,
  description,
  attachedCode,
}) => {
  return (
    <div className="flex flex-col w-4/5 mb-7">
      <div className="w-full flex items-center mb-2">
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
                {author}
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
          className="w-full"
          value={attachedCode}
          onChange={() => {}}
        />
      )}
    </div>
  )
}

export default QuestionForm
