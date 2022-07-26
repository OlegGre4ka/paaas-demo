import styled from "styled-components";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const TipWrapper = styled.div`
  height: 178px ;
  height: fit-content;
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
const ArrowDownIcon = styled(MdKeyboardArrowDown)`
  width: 30px;
  height: 30px;
  font-weight: 700;
  color: #fff;
  // text-aligh: right!important;
  cursor: pointer;
  transition: all .2s ease;
  -webkit-transform-origin: center top;
  transform-origin: center top;
`
const ArrowUpIcon = styled(MdKeyboardArrowUp)`
  width: 30px;
  height: 30px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
`
export { TipWrapper, TipHeader, TipBody, ArrowDownIcon, ArrowUpIcon }
