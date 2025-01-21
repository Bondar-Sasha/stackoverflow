import type { Meta, StoryObj } from '@storybook/react'

import UnauthenticatedHeader from './UnauthenticatedHeader'

const meta: Meta<typeof UnauthenticatedHeader> = {
  title: 'Widgets/header/UnauthenticatedHeader',
  component: UnauthenticatedHeader,
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
