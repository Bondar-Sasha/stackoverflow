import { FC } from 'react'
import { Editor as EditorType, EditorChange } from 'codemirror'

import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/gfm/gfm'
import 'codemirror/mode/css/css'
import 'codemirror/mode/rust/rust'
import 'codemirror/mode/python/python'
import { DefaultEditor } from '../../../Entities'

interface EditorProps {
  language: 'javascript' | 'go' | 'css' | 'rust' | 'python'
  code: string
  onChange: (editor: EditorType, data: EditorChange, value: string) => void
  readOnly?: boolean
}

const Editor: FC<EditorProps> = (props) => {
  return <DefaultEditor {...props} />
}

export default Editor
