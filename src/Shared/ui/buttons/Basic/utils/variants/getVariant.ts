import containedButton from './data/containedButton.module.css'
import outlinedButton from './data/outlinedButton.module.css'
import textButton from './data/textButton.module.css'

const variants = {
  text: textButton.textButton,
  contained: containedButton.containedButton,
  outlined: outlinedButton.outlinedButton,
}

const getVariant = (variant: keyof typeof variants) => variants[variant]

export default getVariant
