import React from "react";
import { useNavigate } from "react-router-dom";
import { FlexBox } from "./../../components/shared-styled";
import Button from "./../../components/UI/Button";
import { useAppSelector, useAppDispatch } from "./../../hooks/reduxHooks";
import { updateStep } from "./../../redux/slices/stepsSlice";
import { PrevNextButtonsProps } from "../../interfaces/PrevNextButtonsProps";

const PrevNextButtons: React.FC<PrevNextButtonsProps> = ({ prevPath, nextPath, nextDisabled }) => {
    const { step } = useAppSelector((state) => (state.steps));
    console.log(step, "in Buttons");
    let navigate = useNavigate();
    const dispatch = useAppDispatch();
    const onClickPrevHandler = () => {
        prevPath && navigate(prevPath);
        dispatch(updateStep(step - 1));
    }
    const onClickNextHandler = () => {
        nextPath && navigate(nextPath);
        dispatch(updateStep(step + 1));
    }
    return (
        <FlexBox justifyContent="flex-end">
            {step !== 1 && <Button
                clickHandler={onClickPrevHandler}
                disabled={false}
            >Previous Step</Button>}
            {step !== 5 && <Button
                clickHandler={onClickNextHandler}
                disabled={nextDisabled}
                color="#ffffff"
                backgroundColor="#2d8f43"
            >Continue</Button>}
        </FlexBox >
    )
}
export default PrevNextButtons