import smallSize from './data/small.module.css'
import mediumSize from './data/medium.module.css'
import largeSize from './data/large.module.css'

const sizes = {
  small: smallSize.small,
  medium: mediumSize.medium,
  large: largeSize.large,
}

const getSize = (size: keyof typeof sizes) => sizes[size]

export default getSize
