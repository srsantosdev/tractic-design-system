import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  overflow: 'hidden',

  variants: {
    size: {
      sm: {
        width: '$8',
        height: '$8',
      },
      md: {
        width: '$12',
        height: '$12',
      },
      lg: {
        width: '$16',
        height: '$16',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  color: '$gray400',

  svg: {
    width: '$6',
    height: '$6',
  },
})
