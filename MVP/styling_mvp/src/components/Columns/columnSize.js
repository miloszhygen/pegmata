import { system } from 'styled-system';

const getColumnSize = size => {
  size = size.toString();

  switch (size) {
    default:
    case 'min':
      return null;

    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '10':
    case '11':
    case '12':
      return `${Math.floor(size / 0.0012) / 100}%`;
  }
};

const columnSize = system({
  size: {
    property: 'width',
    transform: getColumnSize,
  },
});

export default columnSize;
