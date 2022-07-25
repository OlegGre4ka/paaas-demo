import styled from "styled-components";
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
  padding: 30px 40px;
  background-color: rgba(255,255,255,0.4);
  border-top:none;
  border: 2px solid rgba(255,255,255,0.2);
  border-radius: 0 0 30px 30px;
`
// const accordeonAnimation = keyframes`
// 0% {
//   height: 68px ;
// }
// 100% {
//   height: auto ;
// }
// `
// const accordeonBackAnimation = keyframes`
// 0% {
//   height: 168px ;
//   height: fit-content;
// }
// 100% {
//   height: 68px ;
// }
// `
// const AccordeonWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   height: ${props => typeof props.isActive === "boolean" ? (props.isActive ? "68px" : "auto") : "68px"} ;
//   margin-bottom: 16px!important;
//   background-color: rgba(255,255,255,0.2);
//   border: 2px solid rgba(255,255,255,0.2);
//   border-radius: 30px;
//   box-sizing: border-box;
//   cursor: pointer;
//   outline: none;
//   transition: ${props => typeof props.isActive === "boolean" && "0.9s"};
//   animation:  ${props => typeof props.isActive === "boolean" && (props.isActive ? accordeonAnimation : accordeonBackAnimation)} .2s 1 linear forwards;
// `

const ArrowDownIcon = styled(MdKeyboardArrowDown)`
  width: 32px;
  height: 32px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
`
const ArrowUpIcon = styled(MdKeyboardArrowUp)`
  width: 32px;
  height: 32px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
`
    export {TipWrapper, TipHeader, TipBody, ArrowDownIcon, ArrowUpIcon }
