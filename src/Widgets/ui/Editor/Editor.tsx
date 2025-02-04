import {FC} from 'react'

import {DefaultEditor} from '../../../Entities'
import {ProgrammingLanguages} from '../../../Shared'

interface EditorProps {
  language: Lowercase<ProgrammingLanguages>
  value: string
  onChange: (newValue: string | undefined) => void
  readOnly?: boolean
  name?: string
  className?: string
}

const Editor: FC<EditorProps> = (props) => {
  return <DefaultEditor {...props} />
}

export default Editor
