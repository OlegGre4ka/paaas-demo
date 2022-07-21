import React from "react";
import BtnStyled from "./styled.js";
import  {ButtonProps}  from "../../../interfaces/ButtonProps";

const Button: React.FC<ButtonProps> = ({ children, clickHandler, disabled,
     width, height, color, backgroundColor, hoverBackgroundColor, borderColor }) => {   
    return (<BtnStyled
        onClick={clickHandler}
        disabled={disabled}
        width={width}
        height={height}
        color={color}
        backgroundColor={backgroundColor}
        hoverBackgroundColor={hoverBackgroundColor}
        borderColor={borderColor}
    >{children}</BtnStyled>)
}
export default Button
