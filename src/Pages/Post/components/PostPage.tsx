import {FC, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import {toast} from 'react-toastify'

import {DownloadMask, NotFoundMask} from '@/Widgets'
import {Params} from '@/Processes'
import {
  BasicButton,
  BasicInput,
  isPositiveInteger,
  Spinner,
  useCreateCommentMutation,
  useGetPostQuery,
  useLinkedGetAuth,
} from '@/Shared'
import {PostForm} from '@/Features'

const PostPage: FC = () => {
  const params = useParams<Params>()
  const {userId} = useLinkedGetAuth()
  const preparedPostId = Number(params.postId) || -1
  const {data, isLoading} = useGetPostQuery(
    {id: preparedPostId, senderId: Number(userId)},
    {skip: !isPositiveInteger(params.postId)}
  )
  const [newCommentState, setNewComment] = useState<string>('')
  const [createComment, createCommentLogs] = useCreateCommentMutation()

  if (isLoading) {
    return <DownloadMask />
  }
  if (!data) {
    return <NotFoundMask label="There is no such post" />
  }

  const onCreateComment = async () => {
    try {
      if (!newCommentState) {
        toast("There are no comment's content", {
          autoClose: 1800,
          type: 'warning',
        })
        return
      }
      if (!userId) {
        toast('You should be authorized', {
          autoClose: 1800,
          type: 'warning',
        })
        return
      }
      await createComment({
        snippetId: Number(data.id),
        content: newCommentState,
      }).unwrap()
      setNewComment('')
      toast('Comment successfully was created', {
        autoClose: 1800,
        type: 'success',
      })
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="stretching flex items-center flex-col p-5">
      <PostForm
        className="mb-3"
        key={data.id}
        likesQuantity={data.likesQuantity}
        dislikesQuantity={data.dislikesQuantity}
        commentsQuantity={data.commentsQuantity}
        progLang={data.language}
        code={data.code}
        myMark={data.myMark}
        username={data.user.username}
        userId={Number(data.user.id)}
        postId={Number(data.id)}
      />
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-col mb-3">
          <span className="text-xl mb-2">Write comment:</span>
          <BasicInput
            onChange={(e) => {
              setNewComment(e.target.value)
            }}
            value={newCommentState}
            placeholder="comment content"
            className="border-2 border-theme p-2 text-lg mb-2"
          />
          <BasicButton
            disabled={createCommentLogs.isLoading}
            onClick={onCreateComment}
            className={`flex items-center justify-center bg-theme h-11 max-w-24 text-osseous-theme`}
          >
            {createCommentLogs.isLoading ? <Spinner /> : 'save'}
          </BasicButton>
        </div>
        {!!data.comments.length && (
          <span className="text-xl mb-2">Comments:</span>
        )}
        <div>
          {data.comments.map((item) => {
            return (
              <div
                key={item.id}
                className="w-full flex flex-col border-2 border-theme mb-3 p-3"
              >
                <div className="flex flex-col">
                  <div className="mb-1 text-sm">
                    <span className="mr-2">username:</span>
                    <Link
                      to={`/users/${item.user.id}`}
                      className="text-theme cursor-pointer hover:underline"
                    >
                      {item.user.username}
                    </Link>
                  </div>
                  <span>{item.content}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PostPage
