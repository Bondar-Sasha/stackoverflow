import {FC, useEffect, useState} from 'react'
import {UserForm} from '../../../Features'
import {useGetUsersQuery, useInfiniteScroll} from '../../../Shared'
import {DownloadMask} from '../../../Widgets'

const UsersPage: FC = () => {
  const [usersLimitState, setUsersLimit] = useState<number>(15)

  const {data, isLoading} = useGetUsersQuery({
    page: 1,
    limit: usersLimitState,
  })

  const {isEnd} = useInfiniteScroll()

  useEffect(() => {
    if (isEnd) {
      setUsersLimit((prevLimit) => prevLimit + 10)
    }
  }, [isEnd])

  if (isLoading) {
    return <DownloadMask />
  }
  if (!data) {
    return <div>There are no users</div>
  }

  return (
    <div
      className="p-7 flex-center flex-col"
      style={{width: '100%', height: '100%', overflowY: 'auto'}}
    >
      {data.data.data.map((item) => (
        <UserForm
          key={item.id}
          username={item.username}
          userId={item.id}
          role={item.role}
        />
      ))}
    </div>
  )
}

export default UsersPage
