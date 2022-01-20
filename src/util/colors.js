export const getColorByType = (type) => {
  switch (type) {
    case 'Grass':
      return { background: '#9BCC50', text: 'black' };
    case 'Poison':
      return { background: '#B475C5', text: '#fff' };
    case 'Fire':
      return { background: '#FD7D24', text: '#fff' };
    default:
      return { background: '#9BCC50', text: 'black' };
  }
};
