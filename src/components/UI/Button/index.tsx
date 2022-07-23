import React from "react";
import BtnStyled from "./styled.js";
import  {ButtonProps}  from "../../../interfaces/ButtonProps";

const Button: React.FC<ButtonProps> = ({ children, clickHandler, disabled,
     width, height, color, backgroundColor, hoverBackgroundColor, border, padding, hoverColor, hooverBackgroundColor }) => {   
    return (<BtnStyled
        onClick={clickHandler}
        disabled={disabled}
        width={width}
        height={height}
        color={color}
        backgroundColor={backgroundColor}
        hoverBackgroundColor={hoverBackgroundColor}
        border={border}
        padding={padding}
        hoverColor={hoverColor}
        hooverBackgroundColor={hooverBackgroundColor}
    >{children}</BtnStyled>)
}
export default Button
