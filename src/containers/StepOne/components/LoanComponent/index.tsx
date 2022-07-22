import React from "react";
import { FlexBox } from "../../../../components/shared-styled";

const LoanComponent: React.FC = () => {
    return (
        <FlexBox flexDirection="column" justifyContent="center" width="100%" height="233px"
            margin="32px 0px 32px 0px" 
            padding="40px"
            backgroundColor="#ffffff" borderRadius="16px">
            Loan Size
        </FlexBox>
    )
}
export default LoanComponent