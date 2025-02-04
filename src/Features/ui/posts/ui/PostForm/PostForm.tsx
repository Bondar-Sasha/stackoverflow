import {FC} from 'react'
import {CgTerminal} from 'react-icons/cg'
import {BiSolidLike} from 'react-icons/bi'
import {BiSolidDislike} from 'react-icons/bi'
import {CgComment} from 'react-icons/cg'
import {Link} from 'react-router-dom'

import {
  MarksLogoWrapper,
  ProgrammingLanguages,
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
  // const [createMark, createMarkParams] = useCreateMarkMutation()

  const handleLikeMark = async () => {
    console.log(postId)
  }
  const handleDislikeMark = async () => {}
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
        <div className="flex justify-between items-center">
          <div className="flex items-center mr-4" onClick={handleLikeMark}>
            <MarksLogoWrapper
              className="mr-2 text-2xl"
              isActive={myMark === 'like'}
            >
              <BiSolidLike />
            </MarksLogoWrapper>
            <span>{likesQuantity}</span>
          </div>
          <div className="flex items-center" onClick={handleDislikeMark}>
            <MarksLogoWrapper
              className="mr-2 text-2xl"
              isActive={myMark === 'dislike'}
            >
              <BiSolidDislike />
            </MarksLogoWrapper>
            <span>{dislikesQuantity}</span>
          </div>
        </div>
        <div className="flex items-center">
          <CgComment className="mr-2 text-xl" />
          <span>{commentsQuantity}</span>
        </div>
      </div>
    </div>
  )
}

export default PostForm
