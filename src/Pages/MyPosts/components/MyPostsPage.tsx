import {FC} from 'react'
import {PostList} from '@/Widgets'

const MyPostsPage: FC = () => {
  return (
    <div className="stretching flex items-center flex-col">
      <PostList myPosts label="My posts:" />
    </div>
  )
}

export default MyPostsPage
