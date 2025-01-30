import {FC, ReactNode, useLayoutEffect, useState} from 'react'
import {Navigate, useLocation, useParams} from 'react-router-dom'
import {
  selectorId,
  selectorIsAuth,
  selectorWaitingForAuth,
  useAppSelector,
} from '../../App'
import {toast} from 'react-toastify'
import {useLazyGetQuestionQuery} from '../../Shared'
import {DownloadMask} from '../../Widgets'

interface Params {
  userId: string
  questionId: string
  postId: string
  [key: string]: string
}

interface RedirectionProps {
  children?: ReactNode
}

const restrictedFixedPaths: Record<string, string> = {
  '/account': 'Account page is available only for logged in users',
  '/create_question':
    'Creating questions page is available only for logged in users',
  '/create_post': 'Creating posts page is available only for logged in users',
  '/my_posts': 'My posts page is available only for logged in users',
}
const restrictedDynamicPaths: Record<string, string> = {
  '/edit_post': 'Edit posts page is available only for logged in users',
  '/edit_question': 'Edit questions page is available only for logged in users',
}
const editQuestionUrlPattern = /^\/edit_question\/\d+$/

const Redirection: FC<RedirectionProps> = ({children}) => {
  const location = useLocation()
  const params = useParams<Params>()
  const userId = useAppSelector(selectorId)
  const isAuth = useAppSelector(selectorIsAuth)
  const isLoading = useAppSelector(selectorWaitingForAuth)
  const [redirectElem, setRedirectElem] = useState<ReactNode>(children)
  const [getQuestion, getQuestionFetchingState] = useLazyGetQuestionQuery()

  useLayoutEffect(() => {
    if (!isLoading) {
      if (isAuth) {
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
              console.log(response)

              if (Number(response.data.user.id) !== userId) {
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
          getQuestionWithAwait(Number(params.questionId))
          return
        }
      } else {
        const restrictedFixedPathsMessage =
          restrictedFixedPaths[location.pathname]
        if (restrictedFixedPathsMessage) {
          toast(restrictedFixedPathsMessage, {type: 'warning', autoClose: 2200})
          setRedirectElem(<Navigate to="/auth/login" replace />)
          return
        }

        const determinateRestrictedPath = Object.keys(
          restrictedDynamicPaths
        ).find((path) => location.pathname.includes(path))

        if (determinateRestrictedPath) {
          setRedirectElem(<Navigate to="/auth/login" replace />)
          toast(restrictedDynamicPaths[determinateRestrictedPath], {
            type: 'warning',
            autoClose: 2200,
          })
          return
        }
      }
      setRedirectElem(children)
    }
  }, [
    children,
    getQuestion,
    isAuth,
    isLoading,
    location.pathname,
    params.questionId,
    params.userId,
    userId,
  ])

  return getQuestionFetchingState.isLoading ? <DownloadMask /> : redirectElem
}

export default Redirection
