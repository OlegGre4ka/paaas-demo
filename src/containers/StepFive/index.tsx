import React from "react";
import PrevNextButtons from "../../components/PrevNextButtons";
import { FlexBox, LeftPartWrapper, RightPartWrapper, H2 } from "../../components/shared-styled";
import StepSlider from "../../components/StepSlider";

const StepFive: React.FC = () => {
  return (
    <FlexBox>
      <LeftPartWrapper>StepFive</LeftPartWrapper>
      <RightPartWrapper>
      <StepSlider/>
        <H2>Step Five</H2>
        <PrevNextButtons
          prevPath="/step-four"
        />
      </RightPartWrapper>
    </FlexBox>
  )
}
export default StepFive