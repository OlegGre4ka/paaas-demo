import styled from "styled-components";

const InputComponent = styled.input.attrs(props => ({
    name: props.name,
    type: 'text',
    placeholder: props.placeholder,
    pattern: /[0-9]/
  }))`
  font-family: "Basier Circle"
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  border: none;
  border-bottom: 1px solid #d8d8d8;
//   margin-bottom: 16px;
  padding: 8px 0px;
  &:focus{
    outline: none;
    border-bottom: ${({isBorderError}) => isBorderError ? "1px solid #ff4141" : "1px solid #000"};
  }
`
export default InputComponent