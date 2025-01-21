import type { Meta, StoryObj } from '@storybook/react'

import NeutralHeader from './NeutralHeader'

const meta: Meta<typeof NeutralHeader> = {
  title: 'Widgets/header/NeutralHeader',
  component: NeutralHeader,
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
