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
  padding-left: ${({ nav }) => (
    nav === 'undo' ? '25px' : ''
  )};
  padding-right: ${({ nav }) => (
    nav === 'info' ? '25px' : ''
  )};
`;
