import {FC, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {FaRegCircleUser} from 'react-icons/fa6'
import {FaRegTrashAlt} from 'react-icons/fa'
import {MdOutlineLogout} from 'react-icons/md'

import {
  BasicButton,
  Errors,
  useDeleteMeMutation,
  useLazyGetUserStatisticQuery,
  useLinkedGetAuth,
  useLogoutMutation,
} from '@/Shared'
import {
  DownloadMask,
  EditPasswordForm,
  EditUsernameForm,
  NotFoundMask,
} from '@/Widgets'

const AccountPage: FC = () => {
  const navigate = useNavigate()
  const {userId} = useLinkedGetAuth()

  const [statistic, {isLoading, data}] = useLazyGetUserStatisticQuery()
  const [deleteMyAcc, deleteAccLogs] = useDeleteMeMutation()
  const [logout, logoutLogs] = useLogoutMutation()

  const handleLogout = async () => {
    try {
      await logout().unwrap()
      toast('You have successfully logged out', {
        type: 'success',
        autoClose: 1900,
      })
    } catch (err) {
      toast((err as Errors.SimpleError).message, {
        type: 'error',
        autoClose: 1900,
      })
    }
  }
  const handleDeleteAcc = async () => {
    try {
      const response = await deleteMyAcc().unwrap()

      toast(response.message, {
        type: 'success',
        autoClose: 1900,
      })
    } catch (err) {
      toast((err as Errors.SimpleError).message, {
        type: 'error',
        autoClose: 1900,
      })
    }
  }
  useEffect(() => {
    async function handleStatistic() {
      try {
        await statistic({
          id: String(userId),
        }).unwrap()
      } catch (error) {
        toast('server error', {
          autoClose: 1800,
          type: 'error',
        })
        navigate('/')
        console.error(error)
      }
    }
    if (userId) handleStatistic()
  }, [navigate, statistic, userId])

  if (isLoading) return <DownloadMask />

  if (!data) return <NotFoundMask label="There is no such user" />

  return (
    <div className="stretching flex flex-col items-center p-5">
      <div className=" mb-7">
        <h1 className="text-2xl">
          <span className="font-bold">Welcome</span>,
          <span className="">{data.username}</span>
        </h1>
      </div>
      <div className="w-3/4 mb-5">
        <div className="flex items-center justify-evenly  mb-7">
          <FaRegCircleUser className="text-gray-400 text-7xl mr-2 min-w-10" />

          <div className="flex items-center flex-col">
            <div className="flex justify-around flex-col w-full mb-3">
              <h2 className="font-bold">{data.username}</h2>
              <span>id: {data.id}</span>
              <span>Role: {data.role}</span>
            </div>
            <div className="flex justify-around w-full">
              <BasicButton
                onClick={handleLogout}
                disabled={logoutLogs.isLoading}
                className="bg-theme rounded-md text-osseous-theme mr-3"
              >
                <MdOutlineLogout />
              </BasicButton>
              <BasicButton
                onClick={handleDeleteAcc}
                disabled={deleteAccLogs.isLoading}
                className="bg-red-500 rounded-md text-white cursor-pointer"
              >
                <FaRegTrashAlt className="cursor-pointer" />
              </BasicButton>
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
