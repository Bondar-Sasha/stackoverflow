import {FC, useCallback, useState} from 'react'

import {QuestionForm} from '@/Features'
import {useGetQuestionsQuery} from '@/Shared'
import {DownloadMask, EndLessList, NotFoundMask} from '@/Widgets'

const QuestionsPage: FC = () => {
  const [limitState, setLimit] = useState<number>(15)

  const {data, isFetching} = useGetQuestionsQuery({
    limit: limitState,
    page: 1,
  })

  const preparedUpdateLimitFunc = useCallback(() => {
    setLimit((prev) => prev + 25)
  }, [])

  if (isFetching) {
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
        data={data!.data.data}
      >
        {({user, id, ...arrayElem}) => (
          <QuestionForm
            {...arrayElem}
            key={id}
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
