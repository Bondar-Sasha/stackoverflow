import {FC, useCallback, useState} from 'react'
import {FaRegCircleUser} from 'react-icons/fa6'
import {Link, useNavigate} from 'react-router-dom'

import {BasicButton, useGetQuestionsQuery, useLinkedGetAuth} from '@/Shared'
import {DownloadMask, EndLessList, NotFoundMask} from '@/Widgets'
import {Editor} from '@/Entities'

const QuestionsPage: FC = () => {
  const [limitState, setLimit] = useState<number>(15)
  const authData = useLinkedGetAuth()
  const navigate = useNavigate()

  const {data, isFetching, isLoading} = useGetQuestionsQuery({
    limit: limitState,
    page: 1,
  })

  const preparedUpdateLimitFunc = useCallback(() => {
    setLimit((prev) => prev + 25)
  }, [])

  if (isLoading) {
    return <DownloadMask />
  }

  if (!data) {
    return <NotFoundMask label="There are no posts" />
  }

  return (
    <div className="stretching flex-center flex-col">
      <h1 className="mb-4 mt-4 text-2xl">Questions:</h1>
      <EndLessList
        isFetching={isFetching}
        updateLimit={preparedUpdateLimitFunc}
        data={data.data.data}
      >
        {({user, id, title, description, attachedCode}) => (
          <div key={id} className={`flex flex-col w-3/4 mb-4`}>
            <div className="flex items-center mb-2">
              <FaRegCircleUser className="text-inherit stretching min-w-10 min-h-10" />
              <div className="flex flex-col ml-3">
                <span className="text-justify font-bold text-lg">{title}</span>
                <span>
                  <span className="mr-2 italic">asked by user:</span>

                  {
                    <Link
                      className="text-theme cursor-pointer hover:underline"
                      to={`/users/${user.id}`}
                    >
                      {user.username}
                    </Link>
                  }
                </span>
              </div>
            </div>
            {description && (
              <div className="mb-2 text-justify">{description}</div>
            )}
            {attachedCode && (
              <Editor
                readOnly
                language="javascript"
                className="w-full mb-2"
                value={attachedCode}
                onChange={() => {}}
              />
            )}
            {authData.userId === user.id && (
              <BasicButton
                onClick={() => {
                  navigate(`/edit_question/${user.id}`)
                }}
                className={`flex items-center justify-center bg-theme max-w-24 text-osseous-theme`}
              >
                edit
              </BasicButton>
            )}
          </div>
        )}
      </EndLessList>
    </div>
  )
}

export default QuestionsPage
