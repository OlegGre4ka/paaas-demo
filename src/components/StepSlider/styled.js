import styled, { keyframes } from "styled-components";

const Circle = styled.span`
  width: 16px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : "#d8d8d8"}; 
`;

const ActiveCircle = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 5px solid #2d8f43;
`;

const Line = styled.div`
  flex-shrink: 15;
  width: 100%;
  height: 2px;
  background-color: #d8d8d8;
`
// const toActiveLineAnimation = keyframes`
// 0% {
//  width:0%;
// }
// 100% {
// width: 100%;
// }
// `
// animation:  ${props => props.isActive && toActiveLineAnimation} .4s 1 linear forwards;

const ActiveLine = styled.div`
  flex-shrink: 15;
  box-sizing: border-box;
  width: 100%;
  height: 2px;
  background-color: #2d8f43;
`
export { Circle, ActiveCircle, Line, ActiveLine }
