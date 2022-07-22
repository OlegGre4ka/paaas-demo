import React, { useState } from "react";
import { FlexBox, LeftPartWrapper, RightPartWrapper, H2 } from "./../../components/shared-styled";
import PrevNextButtons from "./../../components/PrevNextButtons";
import StepSlider from "./../../components/StepSlider";
import LoanComponent from "./components/LoanComponent";

const StepOne: React.FC = () => {
  const [nextDisabled/*, setNextDisabled*/] = useState(false);

  return (
    <FlexBox>
      <LeftPartWrapper>StepOne</LeftPartWrapper>
      <RightPartWrapper>
        <StepSlider />
        <H2>How much do you need to borrow?</H2>
        <LoanComponent />
        <PrevNextButtons
          nextPath="/citizenship"
          nextDisabled={nextDisabled}
        />
      </RightPartWrapper>
    </FlexBox >
  )
}
export default StepOne