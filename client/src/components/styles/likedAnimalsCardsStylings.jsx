import styled from 'styled-components';

export const AllCardsHolder = styled.div`
  margin-bottom: 10%;
  width: 100%;
  height: 100%;
  padding-left: 5%;
  overflow: scroll;
  display: ${({ page5 }) => (page5 ? 'flex' : '')};
  flex-direction: ${({ page5 }) => (page5 ? 'column' : '')};
  justify-content: ${({ page5 }) => (page5 ? 'space-around' : '')};
  align-items: ${({ page5 }) => (page5 ? 'center' : '')};
`;

export const CardHolder = styled.div`
  height: ${({ page5 }) => (page5 ? '50%' : '20%')};
  width: 93%;
  display: flex;
  flex-direction: ${({ page5 }) => (page5 ? 'column' : 'row')};
  justify-content: center;
  align-items: center
  background: white;
  border: 1px solid black;
  margin-top: 5px;
  border-radius: 5px;
  overflow: ${({ page5 }) => (page5 ? 'scroll' : '')};
  margin-right: ${({ page5 }) => (page5 ? '5%' : '')};
`;

export const Image = styled.img`
  height: ${({ page5 }) => (page5 ? '70%' : '90%')}
  width: ${({ page5 }) => (page5 ? '60%' : '20%')}
  border-radius: 5px;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
  margin-bottom: 5%;
  &:hover {
    transform: scale(1.75, 1.75);
  }
`;

export const Icon = styled.img`
  height: 27%;
  width: 7%;
  border-radius: 50%;
  margin-right: 5%;
`;

export const Input = styled.textarea`
  height: 20%;
  width: 60%;
  outline: none;
`;

export const Button = styled.button`
  height: 5%;
  width: 60%;
  background-color: rgba(14,100,99,.75);
  outline: none;
  &:active {
    background-color: rgba(255,250,205,.75);
  }
`;
