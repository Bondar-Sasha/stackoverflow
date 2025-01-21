import type { Meta, StoryObj } from '@storybook/react'
import AppLogo from '../AppLogo'

const meta: Meta<typeof AppLogo> = {
  title: 'Shared/logos/AppLogo',
  component: AppLogo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'wip'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Your customs styles for AppLogo.',
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
        story: 'AppLogo showing.',
      },
    },
  },
}
