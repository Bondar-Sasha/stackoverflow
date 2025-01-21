import type { Meta, StoryObj } from '@storybook/react'

import AuthenticatedHeader from './AuthenticatedHeader'

const meta: Meta<typeof AuthenticatedHeader> = {
  title: 'Widgets/header/AuthenticatedHeader',
  component: AuthenticatedHeader,
  parameters: {},

  tags: ['autodocs', 'wip'],
  argTypes: {},
  args: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
  args: {},
}
