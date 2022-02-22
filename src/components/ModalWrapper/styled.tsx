import styled from 'styled-components';
import BgImage from '../../assets/img/snowflakeOutline.svg';
import { Scrollbars } from 'react-custom-scrollbars';
import { device } from '../../constants/breakpoints';

export const Container = styled.div`
  position: fixed;
  background: #000000;
  left: 0;
  top: 0;
  min-height: 100%;
  width: 100%;
  z-index:33;
  background-image: url(${BgImage});
  background-repeat: no-repeat;
  display: flex;
`
export const Close = styled.button`
  padding: 10px;
  position: absolute;
  background: none;
  border: none !important;
  outline: none ;
  color: white;
  right: 35px;
  top: 35px;
  transition: 0.2s;
  opacity: 0.5;
  z-index: 1;
  cursor: pointer;
  &:hover{
    opacity: 1;
  }
  @media ${device.xxxl}{
    right: 18px;
    top: 12px;
  }
`

export const CustomScrollbars = styled(Scrollbars)<{isscrollvisible?: string;}>`
  width: 100%;
  height: auto !important;

  & > div:nth-of-type(1){
    display: flex;
    justify-content: center;

    & > div{
      margin-top: auto;
      margin-bottom: auto;
    }
  }
  & > div:nth-of-type(3){
    width: 2px !important;
    background: #2A2A2A !important;
    right: 130px !important;
    ${props => props.isscrollvisible === 'true' ? 'opacity: 1;' : 'opacity: 0;'}
    & > div{
      background: #FFFFFF !important;
      width: 6px !important;
      left: -2px;
    }
    @media ${device.md}{
      display: none;
    }
  }
  @media ${device.xxxl}{
    & > div:nth-of-type(3){
      right: 10px !important;
    }
  }

`
