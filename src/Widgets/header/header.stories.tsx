import type { Meta, StoryObj } from '@storybook/react'

import Header from './components/Header'

const meta: Meta<typeof Header> = {
  title: 'Widgets/header',
  component: Header,
  parameters: {},

  tags: ['autodocs', 'wip'],
  argTypes: {
    children: {
      description: 'React children',
      table: {},
    },
    className: {
      description: 'CSS class',
      table: {},
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
        story: 'header without children.',
      },
    },
  },
  args: {
    className: 'w-4/5',
  },
}
