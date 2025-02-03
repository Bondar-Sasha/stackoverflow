import {FC} from 'react'

import {DefaultEditor} from '../../../Entities'

interface EditorProps {
  language: 'javascript' | 'go' | 'css' | 'rust' | 'python'
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
