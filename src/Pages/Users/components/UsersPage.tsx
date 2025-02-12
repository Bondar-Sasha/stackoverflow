import {FC, useCallback, useState} from 'react'
import {useGetUsersQuery} from '@/Shared'
import {DownloadMask, EndLessList, NotFoundMask} from '@/Widgets'
import {Link} from 'react-router-dom'
import {FaRegCircleUser} from 'react-icons/fa6'

const UsersPage: FC = () => {
  const [limitState, setLimit] = useState<number>(15)

  const {data, isFetching, isLoading} = useGetUsersQuery({
    limit: limitState,
    page: 1,
  })

  const preparedUpdateLimitFunc = useCallback(() => {
    setLimit((prev) => prev + 25)
  }, [])

  if (isLoading) {
    return <DownloadMask />
  }

  if (!data) {
    return <NotFoundMask label="There are no users" />
  }

  return (
    <div className="stretching flex-center flex-col">
      <h1 className="mb-4 mt-4 text-2xl">Users:</h1>
      <EndLessList
        isFetching={isFetching}
        updateLimit={preparedUpdateLimitFunc}
        data={data}
      >
        {({id, role, username}) => (
          <div
            key={id}
            className={`flex items-center w-3/4 border-theme border-2 p-2 mb-7`}
          >
            <FaRegCircleUser className="text-gray-400 text-4xl mr-3" />
            <div className="w-full flex flex-col mb-2">
              <span>
                <span className="mr-2 italic ">username:</span>
                {
                  <Link
                    className="text-theme cursor-pointer hover:underline"
                    to={`/users/${id}`}
                  >
                    {username}
                  </Link>
                }
              </span>
              <span className="text-lg">
                <span className="mr-2 italic">id:</span>
                <span>{id}</span>
              </span>
              <span className="text-lg">
                <span className="mr-2 italic">role:</span>
                {role}
              </span>
            </div>
          </div>
        )}
      </EndLessList>
    </div>
  )
}

export default UsersPage
