import { styled } from '@/styles/stitches.config'
import Popup from 'reactjs-popup'

export const MainContainer = styled('main', {
  backgroundColor: 'red',
  marginLeft: '2rem',
  marginTop: '6rem',
  marginRight: '6rem',
  height: '100%',

  maxWidth: '100%',

  display: 'grid',
  gridTemplateColumns: '1fr  324px',
  gap: '$15',
  padding: '$10',
})

export const ListExploreBooks = styled('div', {
  marginTop: '2rem',

  width: '100%',
  ul: {
    listStyleType: 'none',
    overflow: 'hidden',
    background: 'green',
    li: {
      marginRight: '$5',
      float: 'left',
    },
    'li:nth-child(3n)': {
      marginRight: 0,
    },
    'li:nth-child(3n + 1)': {
      clear: 'left',
    },
  },
})

export const YourBooksAndReviews = styled('div', {
  padding: '$6',
})

export const StyledPopup = styled(Popup, {
  '&-overlay': {
    background: 'rgb(0,0,0,0.4)',
  },
})

export const ContainerLogin = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 460,
  height: 320,
  background: '$gray800',
  borderRadius: '$md',
  color: '$gray300',
  fontFamily: '$default',
  fontSize: '$sm',
  padding: '$12 $8',
})
