import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  DeleteAccButton,
  LogoutButton,
  useLazyGetUserStatisticQuery,
} from '../../../Features'
import { selectorId, selectorIsLoading, useAppSelector } from '../../../App'
import { toast } from 'react-toastify'
import { TextLoader } from './../../../Shared'
import { AnonymousUser } from '../../../Entities'

const AccountPage: FC = () => {
  const navigate = useNavigate()
  const userId = useAppSelector(selectorId)
  const isAuthLoading = useAppSelector(selectorIsLoading)

  const [statistic, { isLoading = true, isError, data }] =
    useLazyGetUserStatisticQuery()

  useEffect(() => {
    if (!isAuthLoading) {
      statistic({
        id: String(userId),
      })
    }

    if (isError) {
      toast('Server error', {
        autoClose: 1800,
        type: 'error',
      })
      navigate('/')
    }
  }, [isAuthLoading, isError, navigate, statistic, userId])

  if (isLoading)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <TextLoader className="text-2xl" label="Loading..." />
      </div>
    )

  return (
    <div className="w-full h-full flex flex-col items-center p-5">
      <div className="mb-10">
        <h1 className="text-2xl">
          <span className="font-bold">Welcome</span>,{' '}
          <span className="">{data?.data.username}</span>
        </h1>
      </div>
      <div className="w-3/4">
        <div className="flex items-center justify-evenly">
          <AnonymousUser className="bg-color-for-hover text-8xl text-gray-500 rounded-full" />
          <div className="flex items-center flex-col">
            <div className="flex justify-around flex-col w-full mb-3">
              <h2 className="font-bold">{data?.data.username}</h2>
              <span>id: {data?.data.id}</span>
              <span>Role: {data?.data.role}</span>
            </div>
            <div className="flex justify-around w-full">
              <LogoutButton className="mr-3" />
              <DeleteAccButton />
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
      <div className="w-3/4 h-10 "></div>
    </div>
  )
}

export default AccountPage
