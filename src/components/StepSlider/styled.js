import styled from "styled-components";

const Circle = styled.span`
  width: 14px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : "#d8d8d8"}; 
`;

const ActiveCircle = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 5px solid #2d8f43;
//   background-color: blue;
`;

export {Circle, ActiveCircle}
export default Circle
