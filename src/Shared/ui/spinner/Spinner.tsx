import { FC } from 'react'
import { CgSpinner } from 'react-icons/cg'

// import styles from './styles/anim.module.css'

const Spinner: FC = () => {
  return (
    <div>
      <span>
        <CgSpinner className="animate-spin" />
      </span>
    </div>
  )
}

export default Spinner
