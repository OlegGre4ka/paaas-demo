import InputComponent from "./styled.js";
import { useAppDispatch } from "./../../../hooks/reduxHooks";
import { updateDisabled } from "./../../../redux/slices/amountSlice";
import { InputProps } from "./../../../interfaces/InputProps";
import { useEffect } from "react";

const Input: React.FC<InputProps> = ({ name, value, changeHandler, placeholder, isBorderError }) => {
    const dispatch = useAppDispatch();
    useEffect(
        () => {
            dispatch(updateDisabled(isBorderError));
        }, [dispatch, isBorderError]
    )
    return (
        <InputComponent
            name={name}
            value={value}
            onChange={changeHandler}
            placeholder={placeholder}
            isBorderError={isBorderError}
            onKeyPress={(e: any) => {
                if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                }
            }}
        />
    )
}
export default Input