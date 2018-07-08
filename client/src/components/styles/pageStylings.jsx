import styled from 'styled-components';

export const Holder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Handlee', cursive;
  width: ${(props) => {
    const { page } = props;
    if (page === '1') {
      return '25%';
    } if (page === '2') {
      return '55%';
    }
  }};
  height: ${(props) => {
    const { page } = props;
    if (page === '1') {
      return '35%';
    } if (page === '2') {
      return '65%';
    }
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
  height: ${(props) => {
    const { type } = props;
    if (type === 'animal') {
      return '150px';
    } if (type === 'logo') {
      return '40px';
    }
  }};
  width: ${(props) => {
    const { type } = props;
    if (type === 'animal') {
      return '150px';
    } if (type === 'logo') {
      return '40px';
    }
  }}
  border-radius: 50%;
  transition: box-shadow all 0.5s ease-in-out;

  &:hover{
    box-shadow: 0 10px 10px 0 rgba(0,0,0,.24), 0 0 2px 0 rgba(0,0,0,.12);
    transform: scale(1.15, 1.15);
  }
`;
