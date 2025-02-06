import {FC} from 'react'
import {HeaderWrapper, SimpleRedirectingButton} from '../../../../../Features'

interface NeutralHeaderProps {
  asideHandler?: () => void
}

const NeutralHeader: FC<NeutralHeaderProps> = () => {
  return (
    <HeaderWrapper isAsideBurger={false}>
      <SimpleRedirectingButton type="home" />
    </HeaderWrapper>
  )
}

export default NeutralHeader
