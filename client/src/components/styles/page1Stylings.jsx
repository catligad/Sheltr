import styled from 'styled-components';

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
