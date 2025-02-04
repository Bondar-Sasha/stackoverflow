import {FC} from 'react'

import {useGetPostsQuery} from '../../../../Shared'
import {PostForm} from '../../../../Features'
import {selectorId, useAppSelector} from '../../../../App'

interface PostListProps {
  userId?: number
}

const PostList: FC<PostListProps> = ({userId}) => {
  const senderId = useAppSelector(selectorId)
  const {data} = useGetPostsQuery({
    page: 1,
    limit: 15,
    senderId: senderId || 0,
    ...(userId ? {userId} : {}),
  })

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
            likesQuantity={item.likesQuantity}
            dislikesQuantity={item.dislikesQuantity}
            commentsQuantity={item.dislikesQuantity}
            progLang={item.language}
            code={item.code}
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
