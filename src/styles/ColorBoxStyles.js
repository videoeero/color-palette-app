import chroma from 'chroma-js';
import sizes from './sizes';

export default {
  ColorBox: {
    width: '20%',
    height: props => (props.showFullPalette ? '25%' : '50%'),
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-0.5rem',
    '&:hover button': {
      opacity: 1,
      transition: 'all .3s'
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: props => (props.showFullPalette ? '20%' : '33.333333%')
    },
    [sizes.down('md')]: {
      width: '50%',
      height: props => (props.showFullPalette ? '10%' : '20%')
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: props => (props.showFullPalette ? '5%' : '10%')
    }
  },
  copyText: {
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? 'black' : 'white'
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.2 ? 'white' : 'black'
  },
  seeMore: {
    color: props =>
      chroma(props.background).luminance() >= 0.7
        ? 'rgba(0, 0, 0, 0.7)'
        : 'white',

    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    bottom: '0',
    right: '0',
    border: 'none',

    width: '6rem',
    height: '3rem',
    textAlign: 'center',
    lineHeight: '3rem',
    textTransform: 'uppercase'
  },
  copyButton: {
    color: props =>
      chroma(props.background).luminance() >= 0.7
        ? 'rgba(0, 0, 0, 0.7)'
        : 'white',
    width: '10rem',
    height: '3rem',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    outline: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    textTransform: 'uppercase',
    border: 'none',
    cursor: 'pointer',
    lineHeight: '3rem',
    textDecoration: 'none',
    opacity: 0
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: 0,
    bottom: 0,
    padding: '1rem',
    color: 'black',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '1.2rem'
  },
  copyOverlay: {
    opacity: 0,
    zIndex: 0,
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s ease-in-out',
    transform: 'scale(0.1)'
  },
  showOverlay: {
    opacity: 1,
    zIndex: 10,
    transform: 'scale(50)',
    position: 'absolute'
  },
  copyMessage: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '4rem',
    transform: 'scale(0.1)',
    opacity: 0,
    color: 'white',
    flexDirection: 'column',
    '& h2': {
      fontWeight: 400,
      textShadow: '1px 2px black',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      marginBottom: 0,
      padding: '1rem',
      textAlign: 'center',
      textTransform: 'uppercase'
    },
    '& p': {
      fontSize: '2.4rem',
      fontWeight: 100
    }
  },
  showMessage: {
    opacity: 1,
    transform: 'scale(1)',
    zIndex: 20,
    transition: '0.4s ease-in-out',
    transitionDelay: '0.3s'
  }
};
