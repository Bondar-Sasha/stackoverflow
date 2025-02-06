import {FC} from 'react'
import {useParams} from 'react-router-dom'

import {isPositiveInteger, useGetUserStatisticQuery} from '../../../Shared'
import {AnonymousUser} from '../../../Entities'
import {DownloadMask} from '../../../Widgets'
import {Params} from '../../../Processes'

const UserPage: FC = () => {
  const params = useParams<Params>()

  const {isLoading, data} = useGetUserStatisticQuery(
    {
      id: String(params.userId),
    },
    {
      skip: !isPositiveInteger(params.userId),
    }
  )

  if (isLoading) return <DownloadMask />

  return (
    <div className="stretching flex-center flex-col p-5">
      <div className="mb-10">
        <h1 className="text-2xl">{data?.data.username}</h1>
      </div>
      <div className="w-3/4 mb-5">
        <div className="flex items-center justify-evenly">
          <AnonymousUser className="text-7xl mr-5" />
          <div className="flex items-center flex-col">
            <div className="flex justify-around flex-col w-full mb-3">
              <h2>
                <span className="mr-2">username:</span>
                <span className="font-bold">{data?.data.username}</span>
              </h2>
              <span>id: {data?.data.id}</span>
              <span>Role: {data?.data.role}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-sm">
          <span>Rating: {data?.data.statistic.rating}</span>
          <span>Snippets: {data?.data.statistic.snippetsCount}</span>
          <span>Comments: {data?.data.statistic.commentsCount}</span>
          <span>Likes: {data?.data.statistic.likesCount}</span>
          <span>Dislikes: {data?.data.statistic.dislikesCount}</span>
          <span>Questions: {data?.data.statistic.questionsCount}</span>
          <span>
            Correct answers: {data?.data.statistic.correctAnswersCount}
          </span>
          <span>
            Regular answers: {data?.data.statistic.regularAnswersCount}
          </span>
        </div>
      </div>
    </div>
  )
}

export default UserPage
