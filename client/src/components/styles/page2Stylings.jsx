import styled from 'styled-components';

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
  background-color: rgba(255,250,240,.1);
  margin-top: -23px;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; 
  display: flex;
  justify-content: center;
`;

export const Pregunta = styled.div`
  font-weight: bold;
  font-size: 20px;
`;
