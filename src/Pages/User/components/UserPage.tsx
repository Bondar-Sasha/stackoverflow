import {FC} from 'react'
import {useParams} from 'react-router-dom'

import {isPositiveInteger, useGetUserStatisticQuery} from '@/Shared'
import {DownloadMask, NotFoundMask} from '@/Widgets'
import {Params} from '@/Processes'
import {FaRegCircleUser} from 'react-icons/fa6'

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

  if (!data) {
    return <NotFoundMask label="There is no such user" />
  }

  return (
    <div className="stretching flex-center flex-col p-5">
      <div className="mb-7">
        <h1 className="text-2xl">{data.username}</h1>
      </div>
      <div className="w-3/4">
        <div className="flex items-center justify-evenly mb-7">
          <FaRegCircleUser className="text-gray-400 text-7xl mr-2 min-w-10" />
          <div className="flex items-center flex-col">
            <div className="flex justify-around flex-col w-full mb-3">
              <h2>
                <span className="mr-2">username:</span>
                <span className="font-bold">{data.username}</span>
              </h2>
              <span>id: {data.id}</span>
              <span>Role: {data.role}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-sm">
          <span>Rating: {data.statistic.rating}</span>
          <span>Snippets: {data.statistic.snippetsCount}</span>
          <span>Comments: {data.statistic.commentsCount}</span>
          <span>Likes: {data.statistic.likesCount}</span>
          <span>Dislikes: {data.statistic.dislikesCount}</span>
          <span>Questions: {data.statistic.questionsCount}</span>
          <span>Correct answers: {data.statistic.correctAnswersCount}</span>
          <span>Regular answers: {data.statistic.regularAnswersCount}</span>
        </div>
      </div>
    </div>
  )
}

export default UserPage
