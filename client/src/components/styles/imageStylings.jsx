import styled from 'styled-components';

export default styled.img`
  height: ${({ type }) => {
    if (type === 'icon') {
      return '150px';
    }
    if (type === 'logo') {
      return '40px';
    }
    if (type === 'nav') {
      return '30px';
    }
    if (type === 'animal') {
      return '250px';
    }
    return null;
  }};
  width: ${({ type }) => {
    if (type === 'icon') {
      return '150px';
    }
    if (type === 'logo') {
      return '40px';
    }
    if (type === 'animal') {
      return '100%';
    }
    if (type === 'nav') {
      return '30px';
    }
    return null;
  }};
  border-radius: ${({ type, nav }) => {
    if (type === 'icon' || nav === 'settings') {
      return '50%';
    }
    if (nav === 'liked') {
      return '5px 5px 20px 20px';
    }
    if (type === 'logo') {
      return '5px';
    } if (type === 'animal') {
      return '';
    }
    return null;
  }};
  transition: box-shadow all 0.5s ease-in-out;
  &:hover{
    box-shadow: ${({ type }) => (type !== 'animal'
    ? '0 10px 10px 0 rgba(0,0,0,.24), 0 0 2px 0 rgba(0,0,0,.12)' : ''
  )};
    transform: ${({ type }) => (type !== 'animal' ? 'scale(1.15, 1.15)' : ''
  )};
  }
`;
