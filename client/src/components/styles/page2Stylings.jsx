import styled from 'styled-components';

export const ImageHolder = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Animal = styled.div`
  position: relative;
  width: 30%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3%;
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
  width: 100%;
`;

export const Pregunta = styled.div`
  font-weight: bold;
  font-size: 20px;
  height: 10%;
  width: 75%;
  margin-top: 3%;
`;
