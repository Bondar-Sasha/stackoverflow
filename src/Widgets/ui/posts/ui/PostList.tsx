import {FC} from 'react'

import {useGetPostsQuery, useLinkedGetAuth} from '../../../../Shared'
import {PostForm} from '../../../../Features'
import {DownloadMask} from '../../DownloadMask'

interface PostListProps {
  isITheSender?: boolean
}

function createParams<T>(base: T) {
  return function (userId?: string) {
    if (!userId) {
      return base
    }
    return {...base, userId: Number(userId)}
  }
}

const PostList: FC<PostListProps> = ({isITheSender = false}) => {
  const {userId} = useLinkedGetAuth()
  const senderId = userId

  const {data, isLoading} = useGetPostsQuery(
    createParams({
      page: 1,
      limit: 15,
      senderId: Number(senderId),
    })(isITheSender ? userId : undefined)
  )
  if (isLoading) {
    return <DownloadMask />
  }
  if (!data) {
    return (
      <div className="stretching flex-center text-xl">There are no posts</div>
    )
  }

  return (
    <div className="w-3/4 flex items-center flex-col">
      {data.map((item) => {
        return (
          <PostForm
            key={item.id}
            likesQuantity={item.likesQuantity}
            dislikesQuantity={item.dislikesQuantity}
            commentsQuantity={item.commentsQuantity}
            progLang={item.language}
            code={item.code}
            myMark={item.myMark}
            username={item.user.username}
            userId={Number(item.user.id)}
            postId={Number(item.id)}
          />
        )
      })}
    </div>
  )
}

export default PostList
