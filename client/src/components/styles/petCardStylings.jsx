import styled from 'styled-components';

export const Image = styled.img`
  height: ${({ type }) => (type === 'animal' ? '250px' : '70%')};
  width: ${({ type }) => (type === 'animal' ? '100%' : '70%')};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  width: 280px;
  padding-top: 3px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
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
`;
