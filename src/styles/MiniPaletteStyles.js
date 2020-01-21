import sizes from './sizes';

export default {
  root: {
    backgroundColor: 'white',
    borderRadius: '5px',
    border: '1px solid black',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    width: '30%',
    maxWidth: '90vw',
    marginBottom: '1rem',
    '&:hover svg': {
      opacity: 1
    },
    [sizes.down('sm')]: {
      width: '47%'
    },
    [sizes.down('xs')]: {
      width: '30rem'
    }
  },
  colors: {
    backgroundColor: 'grey',
    height: '15rem',
    width: '100%'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '1.2rem',
    position: 'relative'
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem'
  },
  miniColor: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-2.2px'
  },
  deleteIcon: {
    color: 'white',
    background: '#eb3d30',
    width: '3rem',
    height: '3rem',
    padding: '1rem',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 10,
    opacity: 0,
    transition: 'all 0.3s',
    '&:hover': {
      background: '#660000'
    }
  }
};
