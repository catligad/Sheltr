import styled from 'styled-components';

export const Image = styled.img`
  height: ${({ type }) => (type === 'animal' ? '250px' : '70%')};
  width: ${({ type }) => (type === 'animal' ? '100%' : '70%')};
  user-select: none;
  pointer-events: none;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: space-around;
  height: ${({ page5 }) => (page5 ? '50%' : '')};
  width: ${({ page4, page5 }) => {
    if (page4) {
      return '60%';
    } if (page5) {
      return '90%';
    }
    return '280px';
  }};
  padding-top: 3px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: ${({ page4, page5 }) => (page4 || page5 ? 'column' : 'row')};
  align-items: ${({ page4, page5 }) => (page4 || page5 ? '' : 'flex-end')};
  justify-content: ${({ page4, page5 }) => (page4 || page5 ? '' : 'flex-start')};
`;

export const Name = styled.div`
  font-size: 17px;
  font-weight: bold;
`;

export const Age = styled.div`
  font-size: 15px;
  margin-left: 3px;
`;

export const Body = styled.div`
  font-size: 13px;
  width: ${({ page5 }) => (page5 ? '100%' : '')}
`;
