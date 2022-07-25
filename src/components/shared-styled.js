import styled  from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content ${props => props.justifyContent ? props.justifyContent : null};
  flex-direction: ${props => props.flexDirection ? props.flexDirection : null};
  align-items: ${props => props.alignItems ? props.alignItems : null};
  width: ${props => props.width ? props.width : "100%"};
  height: ${props => props.height ? props.height : ""};
  margin: ${props => props.margin ? props.margin : ""};
  padding: ${props => props.padding ? props.padding : ""};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : ""};
  border-radius: ${props => props.borderRadius ? props.borderRadius : ""};
  box-sizing: border-box;
`
const LeftPartWrapper = styled.div`
  display: block;
  width: 560px;
  height: 900px;
  background-color: #2D8F43;
  padding: 55px 64px;
  overflow-y: auto;
  overflow: -moz-scrollbars-none; 
  -ms-overflow-style: none;
  &::-webkit-scrollbar { width: 0; }
`
const RightPartWrapper = styled.div`
  width: 100%;
  height: 900px;
  background-color: #f2f4f5;
  padding: 64px;
`
const H2 = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #1e2534;
  font-family: "Basier Circle",serif;
  margin: 72px 0 8px 0;
`
const SpanText = styled.span`
  font-family: "Basier Circle";
  font-size: ${({fontSize}) => fontSize ? fontSize : "16px"};
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : "400"};
  line-height: 20px;
  color: ${({color}) => color ? color : "8F929a"};
  background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : "8F929a"};
  margin-top: ${({marginTop}) => marginTop ? marginTop : "0px"};
  margin-bottom: ${({marginBottom}) => marginBottom ? marginBottom : "0px"};
  padding:  ${({padding}) => padding ? padding : ""};
  border-radius:  ${({borderRadius}) => borderRadius ? borderRadius : ""};
`

const ErrorText = styled.span`
  font-family: "PT Sans";
  font-size: 12px;
  font-weight: 400;
  margin-top: 8px;
  color: #ff4141;
  text-align: right;
`

export { FlexBox, LeftPartWrapper, RightPartWrapper, H2, SpanText, ErrorText }