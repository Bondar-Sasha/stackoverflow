import type { Meta, StoryObj } from '@storybook/react'
import TextLoader from './TextLoader'

const meta: Meta<typeof TextLoader> = {
  title: 'Shared/loaders/text',
  component: TextLoader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'wip'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Your customs styles for TextLoader.',
      table: {
        type: {},
      },
    },
    label: {
      control: 'text',
      description: 'Label in TextLoader.',
      table: {
        type: {},
      },
    },
  },
  args: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Primary TextLoader.',
      },
    },
  },
}

export const CustomLabel: Story = {
  parameters: {
    docs: {
      description: {
        story: 'With your label.',
      },
    },
  },
  args: {
    label: 'wait...w',
  },
}
