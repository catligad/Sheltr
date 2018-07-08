import styled from 'styled-components';

export const Holder = styled.div`
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
      return '25%';
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

export const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  display: flex;
`;

export const Login = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 75%;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid rgb(14,100,99);
  outline: none;
  height: 20px;
  width: 100%;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background-color: rgb(14,100,99, 0.8);
  color: white;
  border-radius: 5px;
  height: 20px;
  width: 100%;
  outline: none;
  &:hover {
    background-color: rgb(14,155,99, 0.8)
  }
`;

export const ImageHolder = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const Animal = styled.div`
  position: static;
  height: 50%;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
}
`;

export const Description = styled.div`
  position: relative;
  font-weight: bold;
  margin-top: -23px;
  position: relative;
  background-color: rgba(255,250,240,.1);
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  display: flex;
  justify-content: center;
`;

export const Pregunta = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const Image = styled.img`
  height: ${({ type }) => {
    if (type === 'animal') {
      return '150px';
    } if (type === 'logo' || type === 'nav') {
      return '40px';
    }
    return null;
  }};
  width: ${({ type }) => {
    if (type === 'animal') {
      return '150px';
    } if (type === 'logo' || type === 'nav') {
      return '40px';
    }
    return null;
  }};
  border-radius: ${({ type, nav }) => {
    if (type === 'animal' || nav === 'settings') {
      return '50%';
    }
    if (nav === 'liked') {
      return '5px 5px 20px 20px';
    }
    if (type === 'logo') {
      return '5px';
    }
    return null;
  }};
  transition: box-shadow all 0.5s ease-in-out;

  &:hover{
    box-shadow: 0 10px 10px 0 rgba(0,0,0,.24), 0 0 2px 0 rgba(0,0,0,.12);
    transform: scale(1.15, 1.15);
  }
`;

export const NoPic = styled.img`
  height: 200px;
  width: 200px;
`;

export const LogoHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  padding: 0px -10px;
  border-bottom: 1px solid grey;
`;

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
  }};
  width: ${({ type }) => {
    if (type === 'side') {
      return '50px';
    }
    if (type === 'center') {
      return '70px';
    }
  }};
  padding-left: ${({ nav }) => (
    nav === 'undo' ? '25px' : ''
  )};
  padding-right: ${({ nav }) => (
    nav === 'info' ? '25px' : ''
  )};
`;
