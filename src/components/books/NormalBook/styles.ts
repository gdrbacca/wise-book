import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  background: '$gray700',
  borderRadius: '$md',
  padding: '$6',
  width: '100%',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
})

export const ProfileNormalBook = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',

  img: {
    border: '2px solid transparent',
    borderRadius: '$full',
    background: '$gradient-image',
    backgroundOrigin: 'border-box',
  },
  div: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '$tall',
    h1: {
      color: '$gray100',
      fontWeight: 400,
      fontSize: '$2xl',
    },
    h3: {
      color: '$gray400',
      fontWeight: 400,
    },
  },
})

export const HeaderNormalBook = styled('header', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
})

export const ContentNormalBook = styled('div', {
  display: 'flex',
  justifyContent: 'left',
  gap: '$5',
  marginTop: '$8',
})

export const NormalBookDescription = styled('div', {
  display: 'flex',
  alignItems: 'left',
  flexDirection: 'column',
  gap: '$2',

  h1: {
    color: '$gray100',
    fontWeight: 700,
    fontSize: '$2xl',
  },
  h3: {
    color: '$gray400',
    fontSize: '$xl',
    fontWeight: 400,
    lineHeight: '$base',
  },
})

export const TextShowMore = styled('p', {
  color: '$gray300',

  /* display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden', */
  display: 'inline',
  textAlign: 'justify',
  textJustify: 'inter-word',

  span: {
    cursor: 'pointer',
    color: '$purple100',
  },
})
