import { useNavigate } from 'react-router-dom'

import { UserLogo } from '../../../../Entities'

const HandleUserLogo: typeof UserLogo = (props) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/account')
  }
  return <UserLogo onClick={handleClick} {...props} />
}

export default HandleUserLogo
