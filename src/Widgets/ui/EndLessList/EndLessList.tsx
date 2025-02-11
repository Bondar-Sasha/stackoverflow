import {ReactNode, useEffect} from 'react'

import {useInfiniteScroll} from '@/Shared'

interface EndLessListProps<T> {
  updateLimit: () => void
  children: (elemProps: T) => ReactNode
  isFetching: boolean
  data: T[]
}

const EndLessList = <T,>({
  children,
  data,
  isFetching,
  updateLimit,
}: EndLessListProps<T>) => {
  const {isEnd} = useInfiniteScroll()

  useEffect(() => {
    if (isEnd) {
      updateLimit()
    }
  }, [isEnd, updateLimit])

  return (
    <div className="w-full flex-center flex-col overflow-auto">
      {data.map((elemProps) => children(elemProps))}
      {isFetching && (
        <div className="w-full h-24 text-xm flex-center">Loading...</div>
      )}
    </div>
  )
}

export default EndLessList
