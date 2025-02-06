import {FC, useCallback, useState} from 'react'
import {UserForm} from '../../../Features'
import {useCheckFetching, useGetUsersQuery} from '../../../Shared'
import {DownloadMask, EndLessList, NotFoundMask} from '../../../Widgets'

const UsersPage: FC = () => {
  const [limitState, setLimit] = useState<number>(15)

  const {data, isLoading, isFetching} = useGetUsersQuery({
    limit: limitState,
    page: 1,
  })

  const preparedUpdateLimitFunc = useCallback(() => {
    setLimit((prev) => prev + 10)
  }, [])
  const valRes = useCheckFetching([
    {condition: isLoading, result: <DownloadMask />},
    {
      condition: !data || !data.data.data.length,
      result: <NotFoundMask label="There are no users" />,
    },
  ])

  if (valRes) {
    return valRes
  }

  return (
    <div className="stretching flex-center flex-col">
      <h1 className="mb-4 mt-4 text-2xl">Users:</h1>
      <EndLessList
        isFetching={isFetching}
        updateLimit={preparedUpdateLimitFunc}
        data={data!.data.data}
      >
        {({id, ...arrayElem}) => (
          <UserForm {...arrayElem} key={id} userId={id} className="mb-7" />
        )}
      </EndLessList>
    </div>
  )
}

export default UsersPage
