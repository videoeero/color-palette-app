import sizes from './sizes';
import backgroundImg from './bg.svg';

export default {
  '@global': {
    '.fade-exit': {
      opacity: 1
    },
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 0.4s ease-out'
    }
  },
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#510d81',
    backgroundImage: `url(${backgroundImg})`,
    /* background by SVGBackgrounds.com */
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'scroll'
  },
  container: {
    width: '60rem',
    maxWidth: '90vw',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white',
    alignItems: 'center',
    '& h1': {
      fontSize: '2rem'
    },
    '& a': {
      color: 'white',
      fontSize: '1.4rem'
    }
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    [sizes.down('xs')]: {
      justifyContent: 'center'
    }
  }
};
