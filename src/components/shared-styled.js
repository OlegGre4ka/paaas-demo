import styled from 'styled-components';

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

  @media (max-width:480px){
    display: ${({ displayMobile }) => displayMobile ? displayMobile : null};
    flex-direction: ${({ flexDirectionMobile }) => flexDirectionMobile ? flexDirectionMobile : null};
    width: ${props => props.widthMobile ? props.widthMobile : ""};
    padding: ${props => props.padding ? props.padding : ""};
  }
`
const LeftPartWrapper = styled.div`
  width: 560px;
  height: 900px;
  background-color: #2D8F43;
  padding: 64px;
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
  `
const SpanText = styled.span`
  font-family: "Basier Circle";
  font-size: 16px;
  font-weight: 400;
  color: ${props => props.color ? props.color : "8F929a"};
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