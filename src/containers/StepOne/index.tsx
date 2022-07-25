import React from "react";
import { FlexBox, LeftPartWrapper, RightPartWrapper, H2, SpanText } from "./../../components/shared-styled";
import { useAppSelector } from "../../hooks/reduxHooks";
import PrevNextButtons from "./../../components/PrevNextButtons";
import StepSlider from "./../../components/StepSlider";
import LoanComponent from "./components/LoanComponent";
import InfoBlock from "./components/InfoBlock";
import LoginBlock from "./../../components/LoginBlock";

const StepOne: React.FC = () => {
  const { disabled } = useAppSelector((state) => (state.amount));

  return (
    <FlexBox>
      <LeftPartWrapper>
        <LoginBlock/>
        <InfoBlock/>
      </LeftPartWrapper>
      <RightPartWrapper>
        <StepSlider />
        <H2>How much do you need to borrow?</H2>
        <SpanText color="#8f929a">You can estimate your loan size and always change it later.</SpanText>
              <LoanComponent />
              <PrevNextButtons
                nextPath="/citizenship"
                nextDisabled={disabled}
              />
      </RightPartWrapper>
    </FlexBox >
  )
}
export default StepOne