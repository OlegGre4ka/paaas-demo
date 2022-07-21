import React from "react";
import { useNavigate } from "react-router-dom";
import { FlexBox } from "./../../components/shared-styled";
import Button from "./../../components/UI/Button";
import  {PrevNextButtonsProps}  from "../../interfaces/PrevNextButtonsProps";

const PrevNextButtons: React.FC<PrevNextButtonsProps> = ({prevPath, nextPath, nextDisabled}) => {
    let navigate = useNavigate();
    const onClickPrevHandler = () => {
        prevPath && navigate(prevPath);
    }
    const onClickNextHandler = () => {
        nextPath && navigate(nextPath);
    }
    return (
        <FlexBox justifyContent="flex-end">
                <Button
                    clickHandler={onClickPrevHandler}
                    disabled={false}
                >Previous Step</Button>
                <Button
                    clickHandler={onClickNextHandler}
                    disabled={nextDisabled}
                    color="#ffffff"
                    backgroundColor = "#2d8f43"
                    >Continue</Button>
        </FlexBox >
    )
}
export default PrevNextButtons