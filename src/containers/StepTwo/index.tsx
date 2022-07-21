import React, {useState} from "react";
import { FlexBox, LeftPartWrapper, RightPartWrapper, H2 } from "./../../components/shared-styled";
import PrevNextButtons from "./../../components/PrevNextButtons";

const StepTwo: React.FC = () => {
    const [nextDisabled/*, setNextDisabled*/] = useState(false);

    return (
        <FlexBox>
            <LeftPartWrapper>StepTwo</LeftPartWrapper>
            <RightPartWrapper>
                <H2>How much do you need to borrow?</H2>
                <PrevNextButtons 
                nextPath="/citizenship" 
                nextDisabled={nextDisabled}
                />
            </RightPartWrapper>
        </FlexBox >
    )
}
export default StepTwo