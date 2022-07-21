import styled from "styled-components";

const BtnStyled = styled.button`
  position: relative;
  font-family: 'Basier Circle';
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  width: ${props => props.width ? props.width : "180px"};
  height: ${props => props.height ? props.height : "42px"};
  margin-left: 15px;
  padding: 11px 30px;
  color: ${props => props.color ? props.color : "#1e2534"};
  border: 1px solid #2d8f43;
  border-radius: 16px;
  background: ${props => props.backgroundColor ? props.backgroundColor : "transparent"}; 
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  opacity:  ${props => props.disabled ? 0.5 : 1};
`
export default BtnStyled;