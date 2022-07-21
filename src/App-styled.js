import styled from 'styled-components'

const FlexBox = styled.div`
  display: flex;
  justify-content ${props => props.justifyContent ? props.justifyContent : null};
  flex-direction: ${props => props.flexDirection ? props.flexDirection : null};
  align-items: ${props => props.alignItems ? props.alignItems : null};
  width: ${props => props.width ? props.width : ""};
  padding: ${props => props.padding ? props.padding : ""};

  @media (max-width:480px){
    display: ${({displayMobile}) => displayMobile ? displayMobile : null};
    flex-direction: ${({flexDirectionMobile}) => flexDirectionMobile ? flexDirectionMobile : null};
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

export {FlexBox, LeftPartWrapper, RightPartWrapper}