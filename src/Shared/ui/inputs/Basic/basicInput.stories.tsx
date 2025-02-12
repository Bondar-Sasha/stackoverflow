import React from 'react'
import type {Meta, StoryObj} from '@storybook/react'
import {ChangeEvent, FC, useState} from 'react'

import BasicInputTemplate, {BasicInputProps} from './BasicInput'

const BasicInput: FC<BasicInputProps> = (props) => {
  const [valueState, setValue] = useState<string>('')

  const handleSetValue = (e: ChangeEvent<HTMLInputElement>) =>
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
  title: 'Shared/inputs/BasicInput',
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
