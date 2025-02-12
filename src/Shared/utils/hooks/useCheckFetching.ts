import {ReactNode} from 'react'

interface Conditions {
  condition: boolean
  result: ReactNode
}

type UseCheckFetching = Conditions[]

const useCheckFetching = (conditions: UseCheckFetching): ReactNode | void => {
  for (const cond of conditions) {
    if (cond.condition) {
      return cond.result
    }
  }
}

export default useCheckFetching
