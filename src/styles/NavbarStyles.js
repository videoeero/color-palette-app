export default {
  Navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh',
    '& .select-container': {
      marginLeft: 'auto',
      marginRight: '1rem'
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
    '& a': {
      textDecoration: 'none',
      color: 'black'
    }
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
    }
  }
};
