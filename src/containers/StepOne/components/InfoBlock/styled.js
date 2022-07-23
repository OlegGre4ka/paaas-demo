import styled, { keyframes } from "styled-components";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const TipWrapper = styled.div`
  height: 178px ;
  height: fit-content;
  margin-bottom: 16px;
`
const TipHeader = styled.div`
  display: flex;
  align-items: center;
  height: 68px ;
  padding: 10px;
  background-color: rgba(255,255,255,0.2);
  border-bottom:none;
  border: 2px solid rgba(255,255,255,0.2);
  border-radius: 30px 30px 0 0;
  box-sizing: border-box;
`
const TipBody = styled.div`
  height: 110px ;
  height: fit-content;
  padding: 20px;
  background-color: rgba(255,255,255,0.4);
  border-top:none;
  border: 2px solid rgba(255,255,255,0.2);
  border-radius: 0 0 30px 30px;
`
const accordeonAnimation = keyframes`
0% {
  height: 68px ;
}
100% {
  height: 168px ;
  height: fit-content;
  align-items: flex-start;
}
`
const AccordeonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 68px ;
//   padding: 10px;
  margin-bottom: 16px;
  background-color: rgba(255,255,255,0.2);
  border: 2px solid rgba(255,255,255,0.2);
  border-radius: 30px;
  box-sizing: border-box;
  cursor: pointer;
  animation:  ${props => props.isActive && accordeonAnimation} .4s 1 linear forwards;
`
//   animation:  ${props => !props.isNotActive && accordeonAnimationBack} .4s 1 linear forwards;


const AccordeonHeader = styled.div`
  display: flex;
  align-items: center;
  height: 68px ;
  padding: 10px;
  background-color: rgba(255,255,255,0.2);
  border-bottom:none;
//   border: 2px solid rgba(255,255,255,0.2);
  border-radius: 30px 30px 0 0;
  box-sizing: border-box;
`
// const accordeonBodyAnimation = keyframes`
// 0% {
//   height: 0px ;
// }
// 100% {
//     height: 110px ;
//     height: fit-content;
//     padding: 20px;
//     // background-color: rgba(255,255,255,0.4);
//     background-color: #ffffff33;
//     border-top:none;
//     border: 2px solid rgba(255,255,255,0.2);
//     border-radius: 0 0 30px 30px;
// }
// `
const AccordeonBody = styled.div`
//   height: 110px ;
//   height: fit-content;
  padding: 30px 40px;
  background-color: rgba(255,255,255,0.4);
//   border-top:none;
//   border: 2px solid rgba(255,255,255,0.2);
  border-radius: 0 0 30px 30px;
//   animation:  ${props => props.isActive && accordeonAnimation} .4s 1 linear forwards;
`
const ArrowDownIcon = styled(MdKeyboardArrowDown)`
  width: 24px;
  height: 24px;
  color: #fff;
  cursor: pointer;
//   &:hover{
//     cursor: pointer;
//     transform: rotate(180deg);
//   }
`
const ArrowUpIcon = styled(MdKeyboardArrowUp)`
  width: 24px;
  height: 24px;
  color: #fff;
  cursor: pointer;
//   &:hover{
//     cursor: pointer;
//     transform: rotate(180deg);
//   }
`
    export {TipWrapper, TipHeader, TipBody, AccordeonWrapper, ArrowDownIcon, ArrowUpIcon,AccordeonHeader, AccordeonBody}
    // , AccordeonHeader,
