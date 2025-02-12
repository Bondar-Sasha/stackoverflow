import type {Meta, StoryObj} from '@storybook/react'
import React, {ChangeEvent, FC, useState} from 'react'

import BasicInputTemplate, {BasicTextareaProps} from './BasicTextarea'

const BasicInput: FC<BasicTextareaProps> = (props) => {
  const [valueState, setValue] = useState<string>('')

  const handleSetValue = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setValue(() => e.target.value)

  return (
    <BasicInputTemplate
      {...props}
      onChange={handleSetValue}
      value={valueState}
    />
  )
}

const meta: Meta<typeof BasicInput> = {
  title: 'Shared/inputs/BasicTextarea',
  component: BasicInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'wip'],
  argTypes: {
    placeholder: {
      control: 'text',
      table: {
        type: {},
      },
      description: 'Input placeholder.',
    },

    value: {
      control: 'text',
      table: {
        type: {},
      },
      description: 'Input value.',
    },

    onChange: {
      control: 'object',
      description: 'Event triggered when the value changes.',
    },
    onFocus: {
      control: 'object',
      description: 'Event triggered when the input field receives focus.',
    },
    onBlur: {
      control: 'object',
      description: 'Event triggered when the input field loses focus.',
    },
  },
  args: {placeholder: 'write', className: 'border-2 border-theme'},
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'input without passed styles.',
      },
    },
  },
}
