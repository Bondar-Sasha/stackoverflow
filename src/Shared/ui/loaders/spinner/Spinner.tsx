import { FC } from 'react'
import { CgSpinner } from 'react-icons/cg'

// import styles from './styles/anim.module.css'

interface SpinnerProps {
  className?: string
}

const Spinner: FC<SpinnerProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <span>
        <CgSpinner className="animate-spin" />
      </span>
    </div>
  )
}

export default Spinner
