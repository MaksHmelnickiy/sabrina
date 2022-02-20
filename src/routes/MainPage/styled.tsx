import styled from 'styled-components';
import { device } from '../../constants/breakpoints';

import BgImage from '../../assets/img/snowflakeOutline.svg';
import Tabs from '../../components/Tabs';
import Button from '../../components/Button';

export const Container = styled.div`
  position: fixed;
  background: #000000;
  left: 0;
  top: 0;
  min-height: 100%;
  width: 100%;
  z-index:22;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${BgImage});
  background-repeat: no-repeat;
`
export const FormsContainer = styled.div`
  
`
export const Form = styled.form`
  &.form-company {

  }
`
export const Wrapper = styled.div`
  max-width: 1486px;
  padding: 0 15px;
  width: 100%;
  @media ${device.xxl} {
    display: block;
  }
  @media ${device.xxl} {
    max-width: 1220px;
  }
  @media ${device.xl} {
    max-width: 1030px;
  }
  @media ${device.lg} {
    max-width: none;
    padding: 0 65px 0 50px;
  }
  @media ${device.md} {
    padding: 0 25px 0 25px;
  }
`;

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
  z-index: 1;
  cursor: pointer;
  &:hover{
    color: rgba(216, 148, 119, 1);
  }
`
export const CustomTabs = styled(Tabs)`
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  padding-bottom: 50px;
  min-height: 765px;
  position: relative;
  width: 100%;
  &>div {
    width: calc(50% - 125px);
  }
  @media ${device.xxxl} {
    &>div {
      width: calc(50% - 50px);
    }
  }
  @media ${device.xl} {
    &>div {
      width: calc(50% - 35px);
    }
  }
  @media ${device.lg} {
    flex-direction: column-reverse;
    padding-bottom: 100px;
    & > div {
      width: 100%;
    }
  }
  @media ${device.md} {
    padding-top: 80px;
    padding-bottom: 230px;
  }

`
export const CustomButton = styled(Button)`
  position: absolute;
  bottom: 70px;
  right: 28%;
  color: #D89477;
  & > div{
    color: #fff;
  }
  & i {
    color: #121C1C;
  }
  @media ${device.lg}{
    left: auto;
    right: 40px;
    bottom: 50px;
    & > div {
      left: -58%;
      top: 0%;
      transform: rotate(160deg);
    }
    &:hover {
      & > div {
        left: -58%;
        top: 0%;
        transform: rotate(160deg);
      }
    }
  }
  @media ${device.md}{
    bottom: 50px;
    left: 144px;
    right: auto;
  }
`


export const ContentContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 155px 15px 0px 15px;
  @media ${device.xxl} {
    padding-top: 172px;
  }
  @media ${device.lg}{
    padding: 182px 50px 0px 50px;
  }
  @media ${device.md}{
    padding: 149px 25px 0px 25px;
    overflow: hidden;
  }
`