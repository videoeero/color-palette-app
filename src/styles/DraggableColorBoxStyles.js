const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-0.5rem',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.3)',
      transition: 'all 0.3s ease-in-out'
    }
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
    fontSize: '1.2rem',
    display: 'flex',
    justifyContent: 'space-between'
  },
  deteleIcon: {
    // padding: '1rem',
    color: 'rgba(0,0,0,0.7)',
    fontSize: '2rem'
  }
};

export default styles;
