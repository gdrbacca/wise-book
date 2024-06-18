import { styled } from '@/styles/stitches.config'

export const SidebarContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '$12',
  position: 'fixed',
  background: '$gradient-vertical',
  borderRadius: '$md',

  height: 'calc(100% - 2.50rem)',
  width: 232,
  margin: 'auto 20px auto',
  top: '20px',

  padding: '2.5rem 3.25rem',
})

export const SidebarButtonContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
  height: '100%',
})

export const FooterSidebar = styled('footer', {
  div: {
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
    h2: {
      color: '$gray100',
      fontSize: '$md',
      fontWeight: '$medium',
    },
    svg: {
      color: '$$colorIcon',
    },
    button: {
      all: 'unset',
      cursor: 'pointer',
      lineHeight: 0,
    },
    img: {
      border: '2px solid transparent',
      borderRadius: '$full',
      background: '$gradient-image',
      backgroundOrigin: 'border-box',
    },
  },
})

export const ButtonMenu = styled('button', {
  all: 'unset',
  background: 'transparent',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  // gap: '0.75rem',
  marginLeft: '-5px',
  width: '100%',
  border: 0,
  // borderLeft: '5px solid transparent',

  fontSize: '$lg',
  color: '$gray400',

  svg: {
    marginLeft: '1rem',
    marginRight: '0.75rem',
  },
  span: {
    height: '100%',
    width: 5,
    left: 0,
    borderRadius: '$full',
  },

  '&:hover': {
    color: '$gray100',
    cursor: 'pointer',
    border: 0,

    span: {
      background: 'linear-gradient(to right, #7FD1CC, #9694F5)',
    },
  },

  variants: {
    selected: {
      yes: {
        span: {
          background: 'linear-gradient(to right, #7FD1CC, #9694F5)',
        },
        color: '$gray100',
      },
      no: {
        span: { background: 'transparent' },
        color: '$gray400',
      },
    },
  },
})
