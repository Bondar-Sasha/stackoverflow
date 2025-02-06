import {ReactNode, useEffect} from 'react'

import {useInfiniteScroll} from '../../../Shared'

interface EndLessListProps<T> {
  updateLimit: () => void
  children: (elemProps: T) => ReactNode
  data: T[]
}

const EndLessList = <T,>({
  children,
  data,
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
    </div>
  )
}

export default EndLessList
