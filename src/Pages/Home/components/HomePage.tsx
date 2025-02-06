import {FC} from 'react'
import {PostList} from '../../../Widgets'

const HomePage: FC = () => {
  return (
    <div className="stretching flex items-center flex-col">
      <PostList />
    </div>
  )
}

export default HomePage
