export default {
  root: {
    width: '100%',
    height: '100vh',
    position: 'relative',
  },
  content: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translateX(-50%)',
    border: '1px solid #ddd',
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  text: {
    display: 'inline-block',
    padding: 10,
    backgroundColor: '#d4d5d6',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    minWidth: 100,
    textAlign: 'center',
    userSelect: 'all',
  },
  select: {
    border: 'none',
    padding: [10, 90],
    '&:focus': { outline: 'none' },
  },
};
