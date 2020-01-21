import sizes from './sizes';

export default {
  Navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh',
    '& .select-container': {
      marginLeft: 'auto',
      marginRight: '1rem',
      [sizes.down('xs')]: {
        margin: '1rem auto'
      }
    },
    [sizes.down('xs')]: {
      flexDirection: 'column',
      height: 'initial',
      justifyContent: 'center'
    }
  },
  logo: {
    marginRight: '1.5rem',
    padding: '0 1.5rem',
    fontSize: '2rem',
    backgroundColor: '#eceff1',
    fontFamily: 'Roboto, sans-serif',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& a': {
      textDecoration: 'none',
      color: 'black'
    },
    [sizes.down('xs')]: {
      fontSize: '1.5rem',
      padding: '1.5rem',
      width: '100%',
      marginBottom: '1.2rem'
    }
  },
  sliderContainer: {
    marginLeft: '1rem',
    fontSize: '1.5rem'
  },
  slider: {
    width: '34rem',
    margin: '0 1rem',
    display: 'inline-block',
    '& .rc-slider-track': {
      backgroundColor: 'transparent'
    },
    '& .rc-slider-rail': {
      height: '1rem'
    },
    '& .rc-slider-handle, .rc-slider-handle:active, rc-slider-handle:focus, rc-slider-handle:focus, rc-slider-handle:hover': {
      backgroundColor: 'green',
      outline: 'none',
      border: '2px solid green',
      boxShadow: 'none',
      width: '1.3rem',
      height: '1.3rem',
      marginLeft: '1rem',
      marginTop: '-0.3rem'
    },
    [sizes.down('xs')]: {
      width: '60vw'
    }
  }
};
