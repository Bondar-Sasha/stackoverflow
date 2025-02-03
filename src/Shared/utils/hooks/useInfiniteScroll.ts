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
    window.addEventListener('scroll', scrollHandler)

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [scrollHandler])

  return {isEnd}
}

export default useInfiniteScroll
