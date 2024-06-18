import * as Dialog from '@radix-ui/react-dialog'
import { keyframes } from '@stitches/react'
import { styled } from '@/styles/stitches.config'
import Popup from 'reactjs-popup'

const fadeInX = keyframes({
  '0%': { transform: 'translateX(0%)' },
  '100%': { transform: 'translateX(-100%)' },
})

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.75)',
  overflowY: 'auto',
})

export const Content = styled(Dialog.Content, {
  position: 'absolute',
  top: 0,
  left: '100%',
  minWidth: 660,
  height: 'auto',
  minHeight: '100%',
  background: '$gray800',

  padding: '$13 $11 $13',
  animation: `${fadeInX} 400ms forwards`,
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  background: 'transparent',
  border: 0,
  top: '$6',
  right: '$6',
  lineHeight: 0,
  cursor: 'pointer',
  color: '$gray400',
})

export const RatingsContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  marginTop: '$12',
})

export const RatingsContentHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  h2: {
    fontFamily: '$default',
    fontSize: '$lg',
    fontWeight: 'normal',
  },
})

export const ButtonAvaliar = styled('button', {
  all: 'unset',
  color: '$purple100',
  cursor: 'pointer',
  fontFamily: '$default',
  fontWeight: '$regular',
})

export const RatingsContentList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  marginTop: '$4',
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

export const StyledPopup = styled(Popup, {
  '&-overlay': {
    background: 'rgb(0,0,0,0.4)',
  },
})
