import React, { useEffect, useState } from "react";
import { useAppSelector } from "./../../hooks/reduxHooks";

import { FlexBox } from "./../shared-styled";
import { Circle, ActiveCircle, Line, ActiveLine } from "./styled";

const StepSlider: React.FC = () => {
    const { step } = useAppSelector((state) => (state.steps));
    const [backgroundColor1, setBackgroundColor1] = useState("#d8d8d8");
    const [backgroundColor2, setBackgroundColor2] = useState("#d8d8d8");
    const [backgroundColor3, setBackgroundColor3] = useState("#d8d8d8");
    const [backgroundColor4, setBackgroundColor4] = useState("#d8d8d8");
    const [backgroundColor5, setBackgroundColor5] = useState("#d8d8d8");

    useEffect(
        () => {
            setCircleColors(step);
        }, [step]
    )
    const setCircleColors = (step: number) => {
        switch (step) {
            case 1:
                setBackgroundColor2("#d8d8d8");
                setBackgroundColor3("#d8d8d8");
                setBackgroundColor4("#d8d8d8");
                setBackgroundColor5("#d8d8d8");
                break;
            case 2:
                setBackgroundColor1("#2d8f43")
                setBackgroundColor3("#d8d8d8");
                setBackgroundColor4("#d8d8d8");
                setBackgroundColor5("#d8d8d8");
                break;

            case 3:
                setBackgroundColor1("#2d8f43")
                setBackgroundColor2("#2d8f43");
                setBackgroundColor4("#d8d8d8");
                setBackgroundColor5("#d8d8d8");
                break;
            case 4:
                setBackgroundColor1("#2d8f43")
                setBackgroundColor2("#2d8f43");
                setBackgroundColor3("#2d8f43");
                setBackgroundColor5("#d8d8d8");
                break;
            case 5:
                setBackgroundColor1("#2d8f43")
                setBackgroundColor2("#2d8f43");
                setBackgroundColor3("#2d8f43");
                setBackgroundColor4("#2d8f43");
                break;
            default:
                setBackgroundColor2("#d8d8d8");
                setBackgroundColor3("#d8d8d8");
                setBackgroundColor4("#d8d8d8");
                setBackgroundColor5("#d8d8d8");
                break;
        }
    }
    return (
        <FlexBox justifyContent="space-between" alignItems="center" >
            {step === 1 ? <ActiveCircle /> : <Circle backgroundColor={backgroundColor1} />}
            {step !== 1 ? <ActiveLine/> : <Line />}
            {step === 2 ? <ActiveCircle /> : <Circle backgroundColor={backgroundColor2} />}
            {step > 2 ? <ActiveLine /> : <Line />}
            {step === 3 ? <ActiveCircle /> : <Circle backgroundColor={backgroundColor3} />}
            {step > 3 ? <ActiveLine /> : <Line />}
            {step === 4 ? <ActiveCircle /> : <Circle backgroundColor={backgroundColor4} />}
            {step > 4 ? <ActiveLine /> : <Line />}
            {step === 5 ? <ActiveCircle /> : <Circle backgroundColor={backgroundColor5} />}

        </FlexBox>

    )
}
export default StepSlider