import {FC, ReactNode, useEffect} from 'react'
import {useLocation, useNavigate, useParams} from 'react-router-dom'

import {toast} from 'react-toastify'
import {
  isPositiveInteger,
  useLazyGetPostQuery,
  useLazyGetQuestionQuery,
  useLinkedGetAuth,
} from '@/Shared'
import {DownloadMask} from '@/Widgets'

export interface Params {
  userId: string
  questionId: string
  postId: string
  [key: string]: string
}

interface RedirectionProps {
  children?: ReactNode
}

const editQuestionUrlPattern = /^\/edit_question\/\d+$/
const editPostUrlPattern = /^\/edit_post\/\d+$/

const Redirection: FC<RedirectionProps> = ({children}) => {
  const {userId, isLoading} = useLinkedGetAuth()
  const navigate = useNavigate()

  const location = useLocation()
  const params = useParams<Params>()
  const [getQuestion, getQuestionFetchingState] = useLazyGetQuestionQuery()
  const [getPost, getPostFetchingState] = useLazyGetPostQuery()

  useEffect(() => {
    if (isLoading) {
      return
    }
    if (editPostUrlPattern.test(location.pathname) && params.postId) {
      const postIdFromURL = params.postId
      const getPostWithAwait = async (id: number) => {
        try {
          const response = await getPost({id}).unwrap()
          if (response.user.id !== userId) {
            navigate('/')
            toast('You did not create this post', {
              type: 'warning',
              autoClose: 1800,
            })
          }
        } catch (error) {
          console.error(error)
        }
      }
      if (!isPositiveInteger(postIdFromURL)) {
        navigate('/')
        toast('There is no such post', {
          type: 'warning',
          autoClose: 1800,
        })
        return
      }
      getPostWithAwait(Number(postIdFromURL))
      return
    }
    if (editQuestionUrlPattern.test(location.pathname) && params.questionId) {
      const questionIdFromURL = params.questionId
      const getQuestionWithAwait = async (id: number) => {
        try {
          const response = await getQuestion({id}).unwrap()
          if (response.data.user.id !== userId) {
            navigate('/')
            toast('You did not create this question', {
              type: 'warning',
              autoClose: 1800,
            })
          }
        } catch (error) {
          console.error(error)
        }
      }
      if (!isPositiveInteger(questionIdFromURL)) {
        navigate('/')
        toast('There is no such question', {
          type: 'warning',
          autoClose: 1800,
        })
        return
      }
      getQuestionWithAwait(Number(questionIdFromURL))
      return
    }
  }, [
    getPost,
    getQuestion,
    isLoading,
    location.pathname,
    navigate,
    params.postId,
    params.questionId,
    userId,
  ])
  if (getQuestionFetchingState.isLoading || getPostFetchingState.isLoading) {
    return <DownloadMask />
  }

  return children
}

export default Redirection
