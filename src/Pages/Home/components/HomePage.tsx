import {FC} from 'react'
import {PostList} from '../../../Widgets'

const HomePage: FC = () => {
  return (
    <div className="stretching flex items-center flex-col">
      <h1 className="mb-4 mt-4 text-2xl">Posts:</h1>
      <PostList />
    </div>
  )
}

export default HomePage
