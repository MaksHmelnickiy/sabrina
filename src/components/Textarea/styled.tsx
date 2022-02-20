import styled from 'styled-components';
import { device } from '../../constants/breakpoints';

export const Container = styled.div`
  @media ${device.lg}{
    max-width: 50%;
  }
  @media ${device.md}{
    max-width: none;
  }
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