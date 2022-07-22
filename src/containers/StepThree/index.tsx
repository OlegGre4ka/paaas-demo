import React from "react";
import PrevNextButtons from "./../../components/PrevNextButtons";
import { FlexBox, LeftPartWrapper, RightPartWrapper, H2 } from "./../../components/shared-styled";
import StepSlider from "./../../components/StepSlider";

const StepThree: React.FC = () => {
  return (
    <FlexBox>
      <LeftPartWrapper>StepThree</LeftPartWrapper>
      <RightPartWrapper>
      <StepSlider />
        <H2>What’s your address?</H2>
        <PrevNextButtons
          prevPath="/citizenship"
          nextPath="/step-four"
        />
      </RightPartWrapper>
    </FlexBox>
  )
}
export default StepThree