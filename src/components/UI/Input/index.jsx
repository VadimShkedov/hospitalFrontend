import { Input, CustomInputContainer } from "./styles";

const CustomInput = ({
  id,
  labelText, 
  inputValue,
  inputHandler, 
  placeholderText = ""
}) => {
  return (
    <CustomInputContainer>
      <label htmlFor={id}>{labelText}</label>
      <Input 
        id={id}
        placeholder={placeholderText} 
        onChange={inputHandler}
        value={inputValue} 
      />
    </CustomInputContainer>
  )
}

export default CustomInput;