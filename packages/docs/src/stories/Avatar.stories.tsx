import { Avatar, AvatarProps } from '@tractic/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://avatars.githubusercontent.com/u/2065981?v=4',
    alt: 'User',
  },
  argTypes: {
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  name: 'With Fallback',
  args: {
    src: undefined,
  },
}
