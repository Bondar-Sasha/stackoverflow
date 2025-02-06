import {FC} from 'react'
import Select, {ActionMeta, SingleValue} from 'react-select'
import {ProgrammingLanguages} from '../../../Shared'

export interface OptionItem {
  value: ProgrammingLanguages
  label: Lowercase<ProgrammingLanguages>
}

interface ProgLangSelectProps {
  value: ProgrammingLanguages
  onChange: (
    newValue: SingleValue<OptionItem>,
    actionMeta: ActionMeta<OptionItem>
  ) => void
  isDisabled?: boolean
  className?: string
}

const options: OptionItem[] = [
  {value: 'JavaScript', label: 'javascript'},
  {value: 'Ruby', label: 'ruby'},
  {value: 'C#', label: 'c#'},
  {value: 'Python', label: 'python'},
  {value: 'Java', label: 'java'},
  {value: 'C/C++', label: 'c/c++'},
  {value: 'Go', label: 'go'},
  {value: 'Kotlin', label: 'kotlin'},
]

const ProgLangSelect: FC<ProgLangSelectProps> = ({
  value = 'JavaScript',
  className = '',
  onChange,
  isDisabled = false,
}) => {
  const selectedOption = options.find((item) => item.value === value)
  return (
    <div className={className}>
      <Select
        value={selectedOption}
        onChange={onChange}
        options={options}
        isDisabled={isDisabled}
        placeholder="language"
      />
    </div>
  )
}

export default ProgLangSelect
