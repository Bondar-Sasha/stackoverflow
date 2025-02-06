import {FC, ReactNode, useLayoutEffect, useState} from 'react'
import {Navigate, useLocation, useParams} from 'react-router-dom'

import {toast} from 'react-toastify'
import {
  isPositiveInteger,
  useLazyGetPostQuery,
  useLazyGetQuestionQuery,
  useLinkedGetAuth,
} from '../../Shared'
import {DownloadMask} from '../../Widgets'

export interface Params {
  userId: string
  questionId: string
  postId: string
  [key: string]: string
}

interface RedirectionProps {
  children?: ReactNode
}

const restrictedPaths: Record<string, string> = {
  '/account': 'Account page is available only for logged in users',
  '/my_posts': 'My posts page is available only for logged in users',
  '/create_post': 'Only logged in users can create posts',
  '/create_question': 'Only logged in users can create questions',
}

const editQuestionUrlPattern = /^\/edit_question\/\d+$/
const editPostUrlPattern = /^\/edit_post\/\d+$/

const Redirection: FC<RedirectionProps> = ({children}) => {
  const {userId, isLoading} = useLinkedGetAuth()

  const location = useLocation()
  const params = useParams<Params>()
  const [redirectElem, setRedirectElem] = useState<ReactNode>(children)
  const [getQuestion, getQuestionFetchingState] = useLazyGetQuestionQuery()
  const [getPost, getPostFetchingState] = useLazyGetPostQuery()

  useLayoutEffect(() => {
    if (!isLoading) {
      if (userId) {
        if (location.pathname.includes('auth')) {
          const isManualNavigation =
            !window.history.state || !window.history.state.idx
          if (isManualNavigation) {
            toast('You are already logged in', {
              type: 'warning',
              autoClose: 1800,
            })
          }
          setRedirectElem(<Navigate to="/" replace />)
          return
        }
        if (String(userId) === params.userId) {
          setRedirectElem(<Navigate to="/account" replace />)
          return
        }
        if (
          editQuestionUrlPattern.test(location.pathname) &&
          params.questionId
        ) {
          const getQuestionWithAwait = async (id: number) => {
            try {
              const response = await getQuestion({id}).unwrap()
              if (response.data.user.id !== userId) {
                setRedirectElem(<Navigate to="/" replace />)
                toast('You did not ask this question', {
                  type: 'warning',
                  autoClose: 1800,
                })
              }
            } catch (error) {
              console.error(error)
            }
          }
          const questionIdFromURL = params.questionId
          if (!isPositiveInteger(questionIdFromURL)) {
            setRedirectElem(<Navigate to="/" replace />)
            toast('There is no such question', {
              type: 'warning',
              autoClose: 1800,
            })
            return
          }
          getQuestionWithAwait(Number(questionIdFromURL))
          return
        }
        if (editPostUrlPattern.test(location.pathname) && params.postId) {
          const getPostWithAwait = async (id: number) => {
            try {
              const response = await getPost({id}).unwrap()
              if (response.user.id !== userId) {
                setRedirectElem(<Navigate to="/" replace />)
                toast('You did not create this post', {
                  type: 'warning',
                  autoClose: 1800,
                })
              }
            } catch (error) {
              console.error(error)
            }
          }
          const postIdFromURL = params.postId
          if (!isPositiveInteger(postIdFromURL)) {
            setRedirectElem(<Navigate to="/" replace />)
            toast('There is no such post', {
              type: 'warning',
              autoClose: 1800,
            })
            return
          }
          getPostWithAwait(Number(postIdFromURL))
          return
        }
      } else {
        const restrictedPathsMessage = restrictedPaths[location.pathname]
        if (restrictedPathsMessage) {
          toast(restrictedPathsMessage, {type: 'warning', autoClose: 2200})
          setRedirectElem(<Navigate to="/auth/login" replace />)
          return
        }
      }
      setRedirectElem(children)
    }
  }, [
    children,
    getPost,
    getQuestion,
    isLoading,
    location.pathname,
    params.postId,
    params.questionId,
    params.userId,
    userId,
  ])

  return getQuestionFetchingState.isLoading ||
    getPostFetchingState.isLoading ? (
    <DownloadMask />
  ) : (
    redirectElem
  )
}

export default Redirection
