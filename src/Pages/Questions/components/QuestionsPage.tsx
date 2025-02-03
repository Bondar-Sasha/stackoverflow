import {FC, useEffect, useState} from 'react'
import {QuestionForm} from '../../../Features'
import {useGetQuestionsQuery, useInfiniteScroll} from '../../../Shared'
import {DownloadMask} from '../../../Widgets'

const QuestionsPage: FC = () => {
  const [questionLimitState, setQuestionLimit] = useState<number>(15)

  const {data, isLoading, isFetching} = useGetQuestionsQuery({
    page: 1,
    limit: questionLimitState,
  })

  const {isEnd} = useInfiniteScroll()
  console.log(isEnd)

  useEffect(() => {
    if (isEnd) {
      setQuestionLimit((prevLimit) => prevLimit + 10)
    }
  }, [isEnd])

  if (isLoading) {
    return <DownloadMask />
  }

  return (
    <div
      className="p-7 flex-center flex-col"
      style={{width: '100%', height: '100%', overflowY: 'auto'}}
    >
      {data && data.data.data.length > 0 ? (
        <>
          {data.data.data.map((item) => (
            <QuestionForm
              key={item.id}
              title={item.title}
              userId={item.user.id}
              author={item.user.username}
              attachedCode={item.attachedCode}
              description={item.description}
            />
          ))}
          {isFetching && <div className="loader">Loading more...</div>}
        </>
      ) : (
        <div>There are no questions</div>
      )}
    </div>
  )
}

export default QuestionsPage
