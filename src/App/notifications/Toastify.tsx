import { FC } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Toastify: FC = () => {
  return (
    <ToastContainer
      theme="light"
      position="bottom-right"
      autoClose={1500}
      pauseOnHover
    />
  )
}

export default Toastify
