import React from "react";
import PrevNextButtons from "./../../components/PrevNextButtons";
import { FlexBox, LeftPartWrapper, RightPartWrapper, H2 } from "./../../components/shared-styled";
import StepSlider from "./../../components/StepSlider";

const StepThree: React.FC = () => {
  return (
    <FlexBox>
      <LeftPartWrapper>StepThree</LeftPartWrapper>
      <RightPartWrapper>
      <StepSlider step={3}/>
        <H2>What’s your citizenship status?</H2>
        <PrevNextButtons
          prevPath="/"
        />
      </RightPartWrapper>
    </FlexBox>
  )
}
export default StepThree