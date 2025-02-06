import {useEffect, useState} from 'react'
import {throttle} from 'lodash'

const useInfiniteScroll = () => {
  const [isEnd, setIsEnd] = useState(false)

  const scrollHandler = throttle(() => {
    const scrollTop = window.scrollY
    const clientHeight = window.innerHeight
    const scrollHeight = document.documentElement.scrollHeight

    const shouldSetEnd =
      scrollHeight - scrollTop - clientHeight < scrollHeight * 0.3

    if (shouldSetEnd !== isEnd) {
      setIsEnd(shouldSetEnd)
    }
  }, 200)

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [scrollHandler])

  return {isEnd}
}

export default useInfiniteScroll
