import React from 'react';
import { Container, CustomInput, Label } from './styled';

export interface IInputProps {
  className?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  label?: string;
  name?: string;
}

const Input = ({
  className,
  type,
  value,
  placeholder,
  label,
  name
}: IInputProps) => {
  const [focus, setFocus] = React.useState(false);
  const [val, setVal] = React.useState('')
  const onChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value)
    if (e.target.value.length > 0) {
      setFocus(true)
    } 
  },[]);
  const onBlur = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      setFocus(true)
    } else {
      setFocus(false)
    }
  },[]);
  return (
    <Container className={className}>
      <Label isFocus={focus}>{label}</Label>
      <CustomInput 
        onClick={() => setFocus(true)} 
        onBlur={(e) => onBlur(e)} 
        type={type} 
        name={name} 
        onChange={(e) => onChange(e)} 
        value={val} 
        placeholder={placeholder}
        autoComplete='off'
      />
    </Container>
  );
};
export default Input;