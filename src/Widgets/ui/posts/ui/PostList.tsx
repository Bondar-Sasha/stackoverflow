import {FC, useState} from 'react'

import {
  useCheckFetching,
  useGetPostsQuery,
  useLinkedGetAuth,
} from '../../../../Shared'
import {PostForm} from '../../../../Features'
import {DownloadMask} from '../../DownloadMask'
import {NotFoundMask} from '../../NotFoundMask'
import {EndLessList} from '../../EndLessList'

interface PostListProps {
  myPosts?: boolean
  label?: string
}

const PostList: FC<PostListProps> = ({
  myPosts = false,
  label = 'All posts:',
}) => {
  const [limitState, setLimit] = useState<number>(15)
  const {userId} = useLinkedGetAuth()
  const senderId = userId

  const {data, isLoading} = useGetPostsQuery({
    ...(myPosts ? {userId: Number(userId)} : {}),
    page: 1,
    limit: limitState,
    senderId: Number(senderId),
  })

  const preparedUpdateLimitFunc = () => {
    setLimit((prev) => prev + 10)
  }

  const valRes = useCheckFetching([
    {condition: isLoading, result: <DownloadMask />},
    {
      condition: !data || !data.length,
      result: <NotFoundMask label="There are no posts" />,
    },
  ])

  if (valRes) {
    return valRes
  }

  return (
    <div className="stretching flex-center flex-col">
      <h1 className="mb-4 mt-4 text-2xl">{label}</h1>
      <EndLessList updateLimit={preparedUpdateLimitFunc} data={data!}>
        {(item) => (
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
            className="mb-5"
          />
        )}
      </EndLessList>
    </div>
  )
}

export default PostList
