import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { UserLogo } from '../../../Shared'
import { userApiController } from '../..'

const { getLazyAuthControls } = userApiController
const HandleUserLogo: typeof UserLogo = (props) => {
  const navigate = useNavigate()
  const [trigger, { data }] = getLazyAuthControls()

  const handleClick = async () => {
    await trigger().catch((error: unknown) => console.error(error))

    if (data) {
      navigate(`/users/${data.data.id}/account`)
    } else {
      toast.error('user is not authorized', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    }
  }
  return <UserLogo onClick={handleClick} {...props} />
}

export default HandleUserLogo
