import styled from 'styled-components';
import { Link } from 'react-scroll';

interface ILogoProps {
  className?: string 
}

export const Container = styled(Link)<ILogoProps>`
  
`
export const CustomTextarea = styled.textarea`
  border: 1px solid #FFBDBD;
  color: #D89477;
  width: 100%;
  font-family: 'Biotif';
  font-weight: 600;
  font-size: 16px;
  height: 275px;
  outline: none;
  background: transparent;
  padding: 10px;
`
export const Label = styled.label`
  color: #F0EEF4;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  font-family: 'Biotif';
  display: block;
  margin-bottom: 14px;
`