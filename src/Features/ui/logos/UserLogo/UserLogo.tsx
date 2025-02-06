import {useNavigate} from 'react-router-dom'

import {UserLogo} from '../../../../Entities'

const HandleUserLogo: typeof UserLogo = (props) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/account')
  }
  return <UserLogo {...props} onClick={handleClick} />
}

export default HandleUserLogo
