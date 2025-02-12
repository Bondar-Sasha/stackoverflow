import type { Meta, StoryObj } from '@storybook/react'
import Spinner from './Spinner'

const meta: Meta<typeof Spinner> = {
  title: 'Shared/loaders/basic',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'wip'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Your customs styles for spinner.',
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
        story: 'Spinner showing.',
      },
    },
  },
}
