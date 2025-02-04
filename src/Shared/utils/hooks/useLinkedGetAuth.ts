import {useGetAuthQuery} from '../../api'

const useLinkedGetAuth = () => {
  const {isLoading, data, isError} = useGetAuthQuery(undefined, {
    selectFromResult(state) {
      return state
    },
  })
  return {isLoading, userId: isError ? undefined : data?.data.id}
}

export default useLinkedGetAuth
