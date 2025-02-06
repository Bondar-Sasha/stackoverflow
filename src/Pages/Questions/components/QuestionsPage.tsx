import {FC, useState} from 'react'

import {QuestionForm} from '../../../Features'
import {useCheckFetching, useGetQuestionsQuery} from '../../../Shared'
import {DownloadMask, EndLessList, NotFoundMask} from '../../../Widgets'

const QuestionsPage: FC = () => {
  const [limitState, setLimit] = useState<number>(15)

  const {isLoading, data} = useGetQuestionsQuery({limit: limitState, page: 1})

  const preparedUpdateLimitFunc = () => {
    setLimit((prev) => prev + 10)
  }

  const valRes = useCheckFetching([
    {condition: isLoading, result: <DownloadMask />},
    {
      condition: !data || !data.data.data.length,
      result: <NotFoundMask label="There are no questions" />,
    },
  ])

  if (valRes) {
    return valRes
  }

  return (
    <div className="stretching flex-center flex-col">
      <h1 className="mb-4 mt-4 text-2xl">Questions:</h1>
      <EndLessList updateLimit={preparedUpdateLimitFunc} data={data!.data.data}>
        {({user, ...arrayElem}) => (
          <QuestionForm
            {...arrayElem}
            className="mb-4"
            userId={user.id}
            username={user.username}
          />
        )}
      </EndLessList>
    </div>
  )
}

export default QuestionsPage
