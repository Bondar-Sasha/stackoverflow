import {FC, useState} from 'react'
import {CommentForm, CreateCommentForm} from '../../../Entities'
import {useCreateCommentMutation} from '../../../Shared'
import {toast} from 'react-toastify'

interface Comment {
  id: string
  content: string
}

interface CommentListProps {
  postId: string
  comments: Comment[]
}
const CommentList: FC<CommentListProps> = ({postId, comments}) => {
  const [newCommentState, setNewComment] = useState<string>('')
  const [createComment, {isLoading}] = useCreateCommentMutation()

  const onCreateComment = async () => {
    try {
      if (newCommentState) {
        await createComment({
          snippetId: Number(postId),
          content: newCommentState,
        }).unwrap()
        toast('Comment successfully was created', {
          autoClose: 1800,
          type: 'success',
        })
      } else {
        toast("There are no comment's content", {
          autoClose: 1800,
          type: 'warning',
        })
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="w-full flex flex-col">
      <CreateCommentForm
        isFetching={isLoading}
        onSubmit={onCreateComment}
        value={newCommentState}
        onChange={(e) => {
          setNewComment(e.target.value)
        }}
      />
      {!!comments.length && <span className="text-xl mb-2">Comments:</span>}
      <div>
        {comments.map((item) => {
          return <CommentForm key={item.id} content={item.content} />
        })}
      </div>
    </div>
  )
}

export default CommentList
