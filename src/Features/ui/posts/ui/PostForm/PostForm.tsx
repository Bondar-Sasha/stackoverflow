import {FC} from 'react'
import {CgTerminal} from 'react-icons/cg'
import {BiSolidLike} from 'react-icons/bi'
import {BiSolidDislike} from 'react-icons/bi'
import {CgComment} from 'react-icons/cg'
import {Link, useNavigate} from 'react-router-dom'
import {TiPencil} from 'react-icons/ti'

import {
  MarksLogoWrapper,
  ProgrammingLanguages,
  useCreateMarkMutation,
  useEditMarkMutation,
  useLinkedGetAuth,
  // useCreateMarkMutation,
} from '../../../../../Shared'
import {DefaultEditor, UserLogo} from '../../../../../Entities'

interface PostFormProps {
  progLang: ProgrammingLanguages
  username: string
  postId: number
  userId: number
  code: string
  likesQuantity: number
  dislikesQuantity: number
  commentsQuantity: number
  myMark?: 'like' | 'dislike'
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
}) => {
  const navigate = useNavigate()
  const [createMark] = useCreateMarkMutation()
  const [editMark] = useEditMarkMutation()
  const authData = useLinkedGetAuth()

  const handleLikeMark = async () => {
    try {
      if (myMark) {
        await editMark({type: 'like', snippetId: postId}).unwrap()
      } else {
        await createMark({type: 'like', snippetId: postId}).unwrap()
      }
    } catch (error) {
      console.error(error)
    }
  }
  const handleDislikeMark = async () => {
    try {
      if (myMark) {
        await editMark({type: 'dislike', snippetId: postId}).unwrap()
      } else {
        await createMark({type: 'dislike', snippetId: postId}).unwrap()
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="w-full flex flex-col mb-5">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center">
          <UserLogo className="mr-2 cursor-default" />
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
      <DefaultEditor
        readOnly
        value={code}
        language={progLang.toLowerCase() as Lowercase<ProgrammingLanguages>}
        onChange={() => {}}
        className="mb-2"
      />
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center mr-4" onClick={handleLikeMark}>
            <MarksLogoWrapper
              className="mr-2 text-2xl"
              isActive={myMark === 'like'}
            >
              <BiSolidLike />
            </MarksLogoWrapper>
            <span>{likesQuantity}</span>
          </div>
          <div className="flex items-center mr-3" onClick={handleDislikeMark}>
            <MarksLogoWrapper
              className="mr-2 text-2xl"
              isActive={myMark === 'dislike'}
            >
              <BiSolidDislike />
            </MarksLogoWrapper>
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
