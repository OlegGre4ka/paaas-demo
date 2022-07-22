import React from "react";
import PrevNextButtons from "./../../components/PrevNextButtons";
import { FlexBox, LeftPartWrapper, RightPartWrapper, H2 } from "./../../components/shared-styled";
import StepSlider from "./../../components/StepSlider";

const StepTwo: React.FC = () => {
  return (
    <FlexBox>
      <LeftPartWrapper>StepTwo</LeftPartWrapper>
      <RightPartWrapper>
      <StepSlider />
        <H2>Are you a U.S. citizen?</H2>
        <PrevNextButtons
          prevPath="/"
          nextPath="/address"
        //   step={2}
        />
      </RightPartWrapper>
    </FlexBox>
  )
}
export default StepTwo