import {FC, useLayoutEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'

import {DeleteAccButton, LogoutButton} from '../../../Features'
import {useLazyGetUserStatisticQuery, useLinkedGetAuth} from './../../../Shared'
import {AnonymousUser} from '../../../Entities'
import {
  DownloadMask,
  EditPasswordForm,
  EditUsernameForm,
} from '../../../Widgets'

const AccountPage: FC = () => {
  const navigate = useNavigate()
  const {userId} = useLinkedGetAuth()

  const [statistic, {isLoading, data}] = useLazyGetUserStatisticQuery()

  useLayoutEffect(() => {
    async function handleStatistic() {
      try {
        await statistic({
          id: String(userId),
        }).unwrap()
      } catch (err) {
        toast('server error', {
          autoClose: 1800,
          type: 'error',
        })
        navigate('/')
        console.error(err)
      }
    }
    if (userId) handleStatistic()
  }, [navigate, statistic, userId])

  if (isLoading) return <DownloadMask />

  return (
    <div className="stretching flex flex-col items-center p-5">
      <div className="mb-10">
        <h1 className="text-2xl">
          <span className="font-bold">Welcome</span>,
          <span className="">{data?.data.username}</span>
        </h1>
      </div>
      <div className="w-3/4 mb-5">
        <div className="flex items-center justify-evenly">
          <AnonymousUser className="text-7xl mr-5" />
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
      <div className="w-3/4 flex flex-col">
        <h3 className="underline font-bold mb-1">Edit your profile:</h3>
        <div className="w-full flex justify-evenly flex-wrap">
          <EditUsernameForm />
          <EditPasswordForm />
        </div>
      </div>
    </div>
  )
}

export default AccountPage
