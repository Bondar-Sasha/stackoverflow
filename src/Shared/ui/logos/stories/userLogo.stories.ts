import type { Meta, StoryObj } from '@storybook/react'
import UserLogo from '../components/UserLogo'

const meta: Meta<typeof UserLogo> = {
  title: 'Shared/logos/UserLogo',
  component: UserLogo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'wip'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Your customs styles for UserLogo.',
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
        story: 'UserLogo showing.',
      },
    },
  },
}
