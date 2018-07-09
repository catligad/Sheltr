import styled from 'styled-components';

export const BtnHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;

export const DecisionBtn = styled.img`
  height: ${({ type }) => {
    if (type === 'side') {
      return '50px';
    }
    if (type === 'center') {
      return '70px';
    }
    return null;
  }};
  width: ${({ type }) => {
    if (type === 'side') {
      return '50px';
    }
    if (type === 'center') {
      return '70px';
    }
    return null;
  }};
  margin-left: ${({ nav }) => (
    nav === 'undo' ? '25px' : ''
  )};
  margin-right: ${({ nav }) => (
    nav === 'info' ? '25px' : ''
  )};
  border-radius: 50%;
  transform: ${({ nav }) => (nav === 'undo' ? 'rotate(210deg)' : '')};
  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  };
`;
