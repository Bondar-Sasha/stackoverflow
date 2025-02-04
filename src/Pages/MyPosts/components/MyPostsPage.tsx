import {FC} from 'react'
import {PostList} from '../../../Widgets'

const MyPostsPage: FC = () => {
  return (
    <div className="stretching flex items-center flex-col">
      <h1 className="mb-4 mt-4 text-2xl">My posts:</h1>
      <PostList isITheSender />
    </div>
  )
}

export default MyPostsPage
