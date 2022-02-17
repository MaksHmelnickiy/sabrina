import styled from 'styled-components';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import { device } from '../../../constants/breakpoints';

export const Container = styled.div`
  max-width: 1520px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  @media ${device.xxl}{
    max-width: 1200px;
  }
  @media ${device.xl}{
    max-width: 1000px;
  }
  @media ${device.lg}{
    max-width: none;
    display: block;
    position: relative;
    padding-top: 973px;
  }
`
export const TickerWrapper = styled.div`
	overflow: hidden;
  padding-top: 109px;
  margin: 0 -15px;
  min-height: 435px;
  @media ${device.xxl}{
    padding-top: 131px;
    min-height: 350px;
  }
  @media ${device.xl}{
    padding-top: 126px;
    min-height: 250px;
  }
  @media ${device.lg}{
    padding-top: 102px;
    margin: 0 -50px;
  }
`
export const TickerText = styled.div`
  font-size: 240px;
  color: ${props => props.theme.ticker};
  text-transform: uppercase;
  @media ${device.xxl}{
    line-height: 1;
  }
  @media ${device.xl}{
    font-size: 200px;
  }
  @media (max-width: 1300px){
    font-size: 170px;
  }
  @media ${device.lg}{
    font-size: 130px;
    white-space: nowrap;
  }
`
export const SecondaryTitle = styled(Title)`
  margin-bottom: 38px;
`
export const Flex = styled.div`

`
export const TextContainer = styled.div`
  width: 50%;
  padding-top: 97px;
  padding-right: 135px;
  @media ${device.xxl}{
    padding-right: 0px;
    padding-top: 108px;
  }
  @media ${device.xl}{
    padding-right: 100px;
  }
  @media ${device.lg}{
    width: 100%;
    padding-right: 0;
    padding-top: 0;
  }
`
export const ImageContainer = styled.div`
  width: 50%;
  padding-left: 10px;
  padding-top: 105px;
  @media ${device.xxl}{
    padding-left: 119px;
    padding-top: 98px;
    position: relative;
    padding-bottom: 400px;
  }
  @media ${device.xl}{
    padding-left: 11px;
    padding-top: 108px;
    position: relative;
    padding-bottom: 400px;
  }
  @media ${device.lg}{
    width: 100%;
    padding-left: 0;
    padding-top: 55px;
    padding-bottom: 0px;
    position: static;
  }
`
export const Text = styled.p`
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: ${props => props.theme.text};
  font-family: 'Biotif';
  &:nth-of-type(1){
    padding-right: 36px;
  }
  @media ${device.xxl}{
    &:nth-of-type(1){
      padding-right: 0px;
    }
  }
  @media ${device.lg}{
    position: static;
  }
`
export const CustomTitle = styled(Title)`
  padding-top: 55px;

`
export const VideoContainer = styled.div`
  position: relative;
  & video {
    max-width: 100%;
  }
  & img {
    max-width: 100%;
    position: absolute;
    top: -80px;
    left: 63px;
    width: 474px;
  }
  @media ${device.xxl}{
    max-width: 477px;
    position: sticky;
    top: 100px;
    & img {
      max-width: 518px;
      top: -55px;
      width: 361px;
      left: 52px;
    }
  }
  @media ${device.xl}{
    max-width: 490px;

    & img {

      width: 368px;

    }
  }
  @media ${device.lg}{
    & img{
      width: 279px;
    }
  }
  @media ${device.lg}{
    max-width: 668px;
    width: 100%;
    margin: 0 auto;
    position: absolute;
    top: 124px;;
    & video {
      width: 100%;
      display: block
    }
    & img {
      width: 76%;
      bottom: -1px;
      top: auto;
      left: 70px;
    }
  }
`
export const StyledButton = styled(Button)`
  position: absolute;
  left: 50%;
  margin-left: -156px;
  bottom: -107px;
  & > div {
    color: #fff;
  }
  @media ${device.xxl}{
    bottom: -124px;
    left: 60%;
  }
  @media ${device.xl} {
    
    bottom: -108px;
    left: 64%;
    & > div {
      left: 14%;
      top: -50%;
      transform: rotate(-127deg);
    }
    &:hover {
      & > div {
        left: 39%;
        top: -47%;
        transform: rotate(-99deg);
      }
    }
  }
  @media ${device.lg}{
    display: none;
  }
`
export const StyledButtonMobile = styled(Button)`
  position: absolute;
  left: 50%;
  margin-left: -156px;
  bottom: -107px;
  display: none;
  & > div {
    color: #fff;
  }
  @media ${device.xl} {
    
    bottom: -108px;
    left: 64%;
    & > div {
      left: 14%;
      top: -50%;
      transform: rotate(-127deg);
    }
    &:hover {
      & > div {
        left: 39%;
        top: -47%;
        transform: rotate(-99deg);
      }
    }
  }
  @media ${device.lg}{
    display: block;
    bottom: 3px;
    left: auto;
    right: -4px;
    & > div {
      left: 3%;
      top: -60%;
      transform: rotate(-127deg);
    }
  }
`
export const List = styled.ul`
  margin-top: 200px;
  @media ${device.xxl}{
    position: absolute;
    bottom: 20px;
  }
  @media ${device.lg}{
    position: static;
    margin-top: 0;
    padding-right: 200px;
  }
`
export const Item = styled.li`
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  color: ${props => props.theme.list};
  position: relative;
  padding-left: 32px;
  & svg{
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -6.5px;
    width: 13px;
    height: 13px;
    color: ${props => props.theme.marker};
  }
`