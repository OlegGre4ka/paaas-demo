import React, { useEffect, useState } from "react";
import { FlexBox } from "./../shared-styled";
import { StepSliderProps } from "./../../interfaces/StepSliderProps";
import {Circle, ActiveCircle} from "./styled";

const StepSlider: React.FC<StepSliderProps> = (
    { step }
) => {
    const [backgroundColor1, setBackgroundColor1] = useState("#d8d8d8");
    const [backgroundColor2, setBackgroundColor2] = useState("#d8d8d8");
    const [backgroundColor3, setBackgroundColor3] = useState("#d8d8d8");
    const [backgroundColor4, setBackgroundColor4] = useState("#d8d8d8");
    const [backgroundColor5, setBackgroundColor5] = useState("#d8d8d8");

    useEffect(
        () => {
            setCircleColors(step);
        },[step]
    )
    const setCircleColors = (step: number) => {
        switch (step) {
            case 2:
                setBackgroundColor1("#2d8f43")
                // setBackgroundColor2("blue");
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
            default: break;
        }
    }
    return (
        <FlexBox justifyContent="space-between">
            <Circle backgroundColor={backgroundColor1} />
            {step === 2 ? <ActiveCircle/> : <Circle backgroundColor={backgroundColor2} />}
            {step === 3 ? <ActiveCircle/> : <Circle backgroundColor={backgroundColor3} />}
            <Circle backgroundColor={backgroundColor4} />
            <Circle backgroundColor={backgroundColor5} />
        </FlexBox>

    )
}
export default StepSlider