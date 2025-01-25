import type { Meta, StoryObj } from '@storybook/react'
import LogoutLogo from '../LogoutLogo'

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
      description: 'Your customs styles for logo.',
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
        story: 'logo showing.',
      },
    },
  },
}
