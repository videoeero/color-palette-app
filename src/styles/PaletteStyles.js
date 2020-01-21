import sizes from './sizes';

export default {
  Palette: {
    height: '100vh',
    flex: 'flex',
    flexDirection: 'column'
  },

  PaletteColors: {
    height: '90%'
  },
  goBack: {
    width: '20%',
    height: '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-0.5rem',
    backgroundColor: 'black',
    opacity: 1,
    '& a': {
      color: 'white',
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
      textDecoration: 'none'
    },
    [sizes.down('lg')]: {
      width: '75%',
      height: '33.333333%'
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '20%'
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: '10%'
    }
  }
};
