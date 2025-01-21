import type { Meta, StoryObj } from '@storybook/react'
import LogoutLogo from '../components/LogoutLogo'

const meta: Meta<typeof LogoutLogo> = {
  title: 'Shared/logos/LogoutLogo',
  component: LogoutLogo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'wip'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Your customs styles for LogoutLogo.',
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
        story: 'LogoutLogo showing.',
      },
    },
  },
}
