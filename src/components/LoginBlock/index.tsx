import { FlexBox, SpanText } from "./../shared-styled";
import Button from "./../UI/Button";
const LoginBlock = () => {
    return (
        <FlexBox height="152px" justifyContent="space-between" alignItems="flex-start">
            <SpanText color="#ffffff" opacity={0.2} fontSize="24px" fontWeight="700">Company Logo</SpanText>
            <Button clickHandler={()=>{}} width="130px" height="50px" color="#f2f4f5" 
            border="1px solid #f2f4f5" hoverColor="#000" hooverBackgroundColor="#f2f4f5">Log in</Button>
        </FlexBox>
    )
}
export default LoginBlock