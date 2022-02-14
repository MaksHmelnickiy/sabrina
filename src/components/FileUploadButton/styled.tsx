import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-top: 66px;
`
export const Input = styled.input`
  position: absolute;
  opacity: 0;
`
export const Label = styled.label`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #F0EEF4;
  font-family: 'Biotif';
  display:flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;
  & svg {
    margin-right: 17px;
  }
  &:hover{
    color: #D89477;
  }
`