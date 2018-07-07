import styled from 'styled-components';

export const Holder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Handlee', cursive;
  width: 25%;
  height: 35%;
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
`;
