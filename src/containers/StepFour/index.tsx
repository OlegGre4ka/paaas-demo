import React from "react";
import PrevNextButtons from "../../components/PrevNextButtons";
import { FlexBox, LeftPartWrapper, RightPartWrapper, H2 } from "../../components/shared-styled";
import StepSlider from "../../components/StepSlider";

const StepFour: React.FC = () => {
  return (
    <FlexBox>
      <LeftPartWrapper>StepFour</LeftPartWrapper>
      <RightPartWrapper>
      <StepSlider />
        <H2>Step Four</H2>
        <PrevNextButtons
          prevPath="/address"
          nextPath="/step-five"
        />
      </RightPartWrapper>
    </FlexBox>
  )
}
export default StepFour