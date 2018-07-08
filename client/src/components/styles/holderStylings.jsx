import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: ${({ page }) => (page === 3 ? '' : 'center')};
  align-items: center;
  flex-direction: column;
  font-family: 'Handlee', cursive;
  width: ${({ page }) => {
    if (page === 1) {
      return '25%';
    }
    if (page === 2) {
      return '35%';
    }
    if (page === 3) {
      return '22%';
    }
    return null;
  }};
  height: ${({ page }) => {
    if (page === 1) {
      return '35%';
    }
    if (page === 2) {
      return '65%';
    }
    if (page === 3) {
      return '65%';
    }
    return null;
  }};
  border-radius: 30px;
  background: rgba(255,250,240,.9);
  box-shadow: 0px 14px 28px rgba(0,0,0,0.25);
`;
