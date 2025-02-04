import {useEffect, useState, useCallback} from 'react'

const useInfiniteScroll = () => {
  const [isEnd, setIsEnd] = useState(false)

  const scrollHandler = useCallback(() => {
    const scrollTop = window.scrollY
    const clientHeight = window.innerHeight
    const scrollHeight = document.documentElement.scrollHeight

    if (scrollHeight - scrollTop - clientHeight < scrollHeight * 0.3) {
      setIsEnd(true)
    } else {
      setIsEnd(false)
    }
  }, [])

  useEffect(() => {
    const throttledScrollHandler = () => {
      requestAnimationFrame(scrollHandler)
    }

    window.addEventListener('scroll', throttledScrollHandler)

    return () => {
      window.removeEventListener('scroll', throttledScrollHandler)
    }
  }, [scrollHandler])

  return {isEnd}
}

export default useInfiniteScroll
