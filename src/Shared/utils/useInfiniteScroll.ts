import { useDebounce } from '@uidotdev/usehooks'
import { useEffect, useState, useCallback } from 'react'

const useInfiniteScroll = (ref: React.RefObject<HTMLElement>) => {
  const [isEnd, setIsEnd] = useState(false)

  const scrollHandler = useCallback(() => {
    if (!ref.current) return

    const { scrollTop, scrollHeight } = ref.current
    const clientHeight = ref.current.clientHeight

    if (scrollHeight - scrollTop - clientHeight < 50) {
      setIsEnd(true)
    } else {
      setIsEnd(false)
    }
  }, [ref])

  const debouncedScrollHandler = useDebounce(scrollHandler, 200)

  useEffect(() => {
    const currentRef = ref.current

    if (currentRef) {
      currentRef.addEventListener('scroll', debouncedScrollHandler)
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', debouncedScrollHandler)
      }
    }
  }, [ref, debouncedScrollHandler])

  return { isEnd }
}

export default useInfiniteScroll
