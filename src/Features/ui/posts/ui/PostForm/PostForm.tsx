import {FC} from 'react'
import {CgTerminal} from 'react-icons/cg'
import {BiSolidLike} from 'react-icons/bi'
import {BiSolidDislike} from 'react-icons/bi'
import {CgComment} from 'react-icons/cg'
import {Link, useNavigate} from 'react-router-dom'
import {TiPencil} from 'react-icons/ti'
import {toast} from 'react-toastify'

import {
  ProgrammingLanguages,
  useCreateMarkMutation,
  useDeleteMarkMutation,
  useEditMarkMutation,
  useLinkedGetAuth,
} from '@/Shared'
import {Editor} from '@/Entities'
import {FaRegUser} from 'react-icons/fa'

interface PostFormProps {
  progLang: ProgrammingLanguages
  username: string
  postId: number
  userId: number
  code: string
  likesQuantity: number
  dislikesQuantity: number
  commentsQuantity: number
  myMark: 'like' | 'dislike' | 'none'
  className?: string
}

const PostForm: FC<PostFormProps> = ({
  progLang,
  username,
  userId,
  code,
  postId,
  likesQuantity,
  dislikesQuantity,
  commentsQuantity,
  myMark,
  className = '',
}) => {
  const navigate = useNavigate()
  const [createMark] = useCreateMarkMutation()
  const [deleteMark] = useDeleteMarkMutation()
  const [editMark] = useEditMarkMutation()
  const authData = useLinkedGetAuth()

  const handleMark = async (type: 'like' | 'dislike') => {
    try {
      if (authData.userId) {
        if (!myMark) {
          await createMark({type, snippetId: postId}).unwrap()
          return
        }

        if (myMark === type) {
          await deleteMark({snippetId: postId}).unwrap()
        } else {
          await editMark({type, snippetId: postId}).unwrap()
        }
      } else {
        toast('You need to be authorized', {autoClose: 1800, type: 'warning'})
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleLikeMark = () => handleMark('like')
  const handleDislikeMark = () => handleMark('dislike')

  return (
    <div className={`w-3/4 flex flex-col ${className}`}>
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center">
          <FaRegUser className={`mr-2 cursor-default`} />
          <Link
            to={`/users/${userId}`}
            className="text-theme cursor-pointer hover:underline"
          >
            {username}
          </Link>
        </div>
        <div className="flex items-center">
          <CgTerminal className="m-2" />
          <span>{progLang}</span>
        </div>
      </div>
      <Editor
        readOnly
        value={code}
        language={progLang.toLowerCase() as Lowercase<ProgrammingLanguages>}
        className="mb-2"
      />
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center mr-4" onClick={handleLikeMark}>
            <BiSolidLike
              className={`mr-1 text-2xl text-gray-300 ${
                myMark === 'like' ? 'text-theme' : ''
              }`}
            />
            <span>{likesQuantity}</span>
          </div>
          <div className="flex items-center mr-3" onClick={handleDislikeMark}>
            <BiSolidDislike
              className={`mr-1 text-2xl text-gray-300 ${
                myMark === 'dislike' ? 'text-theme' : ''
              }`}
            />
            <span>{dislikesQuantity}</span>
          </div>
          {authData.userId === String(userId) && (
            <div
              className="flex items-center cursor-pointer"
              onClick={() => {
                navigate(`/edit_post/${postId}`)
              }}
            >
              <TiPencil className="text-xl text-theme" />
            </div>
          )}
        </div>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            navigate(`/posts/${postId}`)
          }}
        >
          <CgComment className="mr-2 text-xl" />
          <span>{commentsQuantity}</span>
        </div>
      </div>
    </div>
  )
}

export default PostForm
