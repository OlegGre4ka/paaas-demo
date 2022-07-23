import styled from "styled-components";

const BtnStyled = styled.button`
  position: relative;
  font-family: 'Basier Circle';
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  width: ${props => props.width ? props.width : "210px"};
  height: ${props => props.height ? props.height : "44px"};
  margin-left: 15px;
  padding: ${({padding}) => padding ? padding : "11px 30px"};
  color: ${props => props.color ? props.color : "#1e2534"};
  border: ${({border}) => border ? border : "1px solid #f2f4f5"};
  border-radius: 16px;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : "transparent"}; 
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  opacity:  ${props => props.disabled ? 0.5 : 1};

  &:hover{
    // opacity: 0.7;
    color: ${({hoverColor}) => hoverColor ? hoverColor : ""};
    background-color: ${({hooverBackgroundColor}) => hooverBackgroundColor ? hooverBackgroundColor : "transparent"}; 
  }
`
export default BtnStyled;