import { styled } from '@/styles/stitches.config'

export const Container = styled('form', {
  background: '$gray700',
  borderRadius: '$md',
  width: 564,
  padding: '$6',
})

export const RatingText = styled('div', {
  textarea: {
    width: '100%',
    height: 164,
    fontFamily: '$default',
    background: '$gray800',
    borderRadius: '$md',
    color: '$gray100',
    marginTop: '$6',
    border: '1px solid',
    borderColor: '$green200',
    resize: 'none',
    padding: '$4',
  },

  span: {
    position: 'relative',
    color: '$gray400',

    top: '-2.5rem',
    marginLeft: '85%',
  },
})

export const ButtonForm = styled('button', {
  background: '$gray600',
  width: 40,
  height: 40,
  border: 'none',
  borderRadius: '$sm',
  cursor: 'pointer',
  lineHeight: 0,
  marginTop: '-1rem',

  '&:hover': {
    background: '$gray500',
  },

  variants: {
    color: {
      purple: {
        color: '$purple100',
      },
      green: {
        color: '$green100',
      },
    },
  },
})

export const RatingFormFooter = styled('footer', {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '$2',
})

export const RatingFormHeader = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',

  'div:first-child': {
    display: 'flex',
    alignItems: 'center',
    gap: '$5',
    h1: {
      fontFamily: '$default',
      fontSize: '$md',
    },
  },
  img: {
    border: '2px solid transparent',
    borderRadius: '$full',
    background: '$gradient-image',
    backgroundOrigin: 'border-box',
  },
})

export const ErroSubmit = styled('p', {
  color: 'red',
  fontFamily: '$default',
  fontSize: '$lg',
  marginTop: '-1.5rem',
  marginBottom: '$4',
})
