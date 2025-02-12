import {useEffect, useState} from 'react'
import {throttle} from 'lodash'

const useInfiniteScroll = () => {
  const [isEnd, setIsEnd] = useState(false)

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollTop = window.scrollY
      const clientHeight = window.innerHeight
      const scrollHeight = document.documentElement.scrollHeight

      const scrolledPercentage = (scrollTop + clientHeight) / scrollHeight

      if (scrolledPercentage >= 0.7) {
        setIsEnd(true)
      } else {
        setIsEnd(false)
      }
    }, 200)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return {isEnd}
}

export default useInfiniteScroll
