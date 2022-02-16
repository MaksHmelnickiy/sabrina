import styled from 'styled-components';
import { device } from '../../constants/breakpoints';

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
  @media ${device.xl}{
    margin-left: 0px;
    margin-right: 0px;
  }
`
export const Item = styled.div`
  background: ${props => props.theme.expBg};
  margin: 10px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  position: relative;
  @media ${device.xl}{
    margin: 15px 0px;
    justify-content: center;
  }
  &:nth-of-type(1){
    width: calc(50% - 20px);
    padding: 40px 150px 42px 64px;
    & > svg {
      right: -77px;
      top: 47%;
      transform: translateY(-50%);
    }
  }
  &:nth-of-type(2){
    width: calc(50% - 20px);
    padding: 49px 150px 35px 88px;
    & > svg {
      right: 73px;
      bottom: -74px;
    }
  }
  &:nth-of-type(3){
    width: calc(66.5% - 20px);
    padding: 43px 130px 36px 59px;
    & > svg {
      right: -55px;
      top: 58%;
      transform: translateY(-50%);
    }
    & > span {
      padding-left: 0px;
    }
  }
  &:nth-of-type(4){
    width: calc(33.5% - 20px);
    padding: 86px 42px 36px 54px;
    display: block;
    text-align: center;
    & > span {
      padding-left: 0px;
      padding-top: 12px;
    }
  }
  & > svg {
    position: absolute;
    z-index: 1;
    color: ${props => props.theme.expArrowIcon};
  }
  @media ${device.xxl}{
    &:nth-of-type(1){
      padding: 24px 60px 42px 58px;
      & > div > svg {
        max-width: 100%;
      }
      & > div{
        min-width: 194px;
        padding-top: 17px;
      }
      & > svg { 
        top: 66%;
        width: 171px;
      }
      & > span {
        padding-left: 58px;
      }
    }
    &:nth-of-type(2){
      padding: 49px 90px 39px 61px;
      & > svg {
        right: 39%;
        bottom: -111px;
        width: 71px;
      }
    }
    &:nth-of-type(3){
      padding: 38px 55px 46px 59px;
      & > svg {
        right: -62px;
        top: auto;
        transform: none;
        bottom: 13%;
        width: 110px;
      }
    }
    &:nth-of-type(4){
      padding: 100px 44px 36px 41px;
      & > span {
        padding-top: 0px;
      }
    }
  }
  @media ${device.xl}{
    &:nth-of-type(1){
      padding: 30px 60px 35px 58px;
      width: 100%;
      & > div > svg {
        max-width: 100%;
      }
      & > div{
        min-width: 1px;
        padding-top: 18px;
        width: 45%;
        text-align: right;
        padding-right: 6%;
      }
      & > svg { 
        top: auto;
        width: auto;
        transform: rotate(110deg);
        right: -3%;
        bottom: -30px;
      }
      & > span {
        padding-left: 0px;
        max-width: none;
        padding-right: 18%;
        padding-left: 35px;
        width: 55%;
      }
    }
    &:nth-of-type(2){
      padding: 35px 60px 35px 58px;
      width: 100%;
      & > div > svg {
        max-width: 100%;
      }
      & > div{
        min-width: 1px;
        padding-top: 18px;
        width: 45%;
        text-align: right;
        padding-right: 2%;
      }
      & > svg { 
        top: auto;
        width: auto;
        right: 23%;
        bottom: -100px;
      }
      & > span {
        padding-left: 0px;
        max-width: none;
        padding-right: 18%;
        padding-left: 35px;
        width: 55%;
      }
    }
    &:nth-of-type(3){
      padding: 40px 60px 66px 58px;
      width: 100%;
      & > div > svg {
        max-width: 100%;
      }
      & > div{
        min-width: 1px;
        padding-top: 18px;
        width: 45%;
        text-align: right;
        padding-right: 0;
        position: relative;
        right: -7%;
      }
      & > svg { 
        top: auto;
        width: auto;
        right: 10%;
        bottom: -64px;
      }
      & > span {
        padding-left: 0px;
        max-width: none;
        padding-right: 5%;
        padding-left: 35px;
        width: 55%;
      }
    }
    &:nth-of-type(4){
      padding: 40px 60px 45px 58px;
      width: 100%;
      display: flex;
      & > div > svg {
        max-width: 100%;
      }
      & > div{
        min-width: 1px;
        padding-top: 11px;
        width: 45%;
        text-align: right;
        padding-right: 10%;
        position: relative;
        right: -7%;
      }
      & > span {
        padding-left: 0px;
        max-width: none;
        padding-right: 5%;
        padding-left: 35px;
        width: 55%;
        text-align: left;
      }
    }
  }
`
export const Text = styled.span`
  color: ${props => props.theme.titleH4};
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  padding-left: 41px; 
  display: block;
`
export const IconWrapper = styled.div`
  color: ${props => props.theme.expIcon};

`
