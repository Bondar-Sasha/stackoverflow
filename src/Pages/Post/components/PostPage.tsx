import {FC} from 'react'
import {useParams} from 'react-router-dom'

import {CommentList, DownloadMask, NotFoundMask} from '../../../Widgets'
import {Params} from '../../../Processes'
import {
  isPositiveInteger,
  useGetPostQuery,
  useLinkedGetAuth,
} from '../../../Shared'
import {PostForm} from '../../../Features'

const PostPage: FC = () => {
  const params = useParams<Params>()
  const {userId} = useLinkedGetAuth()
  const preparedPostId = Number(params.postId) || -1
  const {data, isLoading} = useGetPostQuery(
    {id: preparedPostId, senderId: Number(userId)},
    {skip: !isPositiveInteger(params.postId)}
  )

  if (isLoading) {
    return <DownloadMask />
  }
  if (!data) {
    return <NotFoundMask label="There is no such post" />
  }
  return (
    <div className="stretching flex items-center flex-col p-5">
      <PostForm
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
      <CommentList postId={data.id} comments={data.comments} />
    </div>
  )
}

export default PostPage
