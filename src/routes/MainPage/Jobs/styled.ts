import styled, { css } from 'styled-components';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import BgImage from '../../../assets/img/jobsPhoto.png';
import { device } from '../../../constants/breakpoints';
import { animateLayoutX, animationBg, fadeRight } from '../../../constants/keyframes';

export const Container = styled.div`
  max-width: 1520px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-bottom: 220px;
  @media ${device.xxl}{
    max-width: 1200px;
    padding-bottom: 153px;
  }
  @media ${device.xl}{
    max-width: 1000px;
    padding-bottom: 153px;
  }
  @media ${device.lg}{
    display: block;
    padding-bottom: 79px;
  }
  @media ${device.md}{
    padding-top: 75px;
    padding-bottom: 211px;
  }
`
export const StyledButton = styled(Button)`
  position: relative; 
  margin-top: 138px;
  z-index: 1;
  & i {
    max-width: 80px;
  }
  & > div {
    color: ${props => props.theme.buttonSecondaryArrow};
  }
  @media ${device.xxl}{
    margin-top: 14px;
    & > div {
      transform: rotate(-48deg);
      position: absolute;
      left: 87%;
      top: 14%;
    }
  }
  @media ${device.lg}{
    position: absolute;
    bottom: 76px;
    right: 21px;
    z-index: 2;
    & > div {
      transform: rotate(-103deg);
      left: 27%;
      top: -48%;
    }
    &:hover {
      & > div {
        transform: rotate(-103deg);
        left: 27%;
        top: -48%;
      }
    }
  }
  @media ${device.md}{
    bottom: 49px;
    right: 28px;
    z-index: 2;
    & > div {
      transform: rotate(-233deg);
      left: -54%;
      top: 19%;
    }
    &:hover {
      & > div {
        transform: rotate(-233deg);
        left: -54%;
        top: 19%;
      }
    }
  }
`
export const Text = styled.div`
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  padding-top: 20px;
  padding-bottom: 38px;
  color: ${props => props.theme.text};
  font-family: 'Biotif';
  max-width: 290px;
  @media ${device.xxl}{
    padding-top: 11px;
    padding-bottom: 11px;
  }
  @media ${device.lg}{
    max-width: 502px;;
    padding-top: 22px;
    padding-bottom: 60px;
  }
  @media ${device.md}{
    padding-bottom: 37px;
  }
`
export const CustomTitle = styled(Title)`
  @media ${device.lg}{
    text-transform: uppercase;
  }
`
export const Description = styled.div`
  color: ${props => props.theme.titleH4};
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  
  display: block;
  max-width: 520px;
  position: relative;
  z-index: 1;
  padding-top: 41px;
  @media ${device.xxl}{
    padding-top: 0px;
    margin-top: 91px;
  }
  @media ${device.lg}{
    max-width: none;
    margin-top: 80px;
    padding-right: 224px;
  }
  @media ${device.md}{
    margin-top: 39px;
    padding-right: 0;
  }
`
export const Image = styled.div<{isAnimationStart: boolean}>`
  width: calc(50% - 91px);
  background: url(${BgImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 1000px 0;
  position: relative;
  ${props => props.isAnimationStart ? css`
    animation: 0.75s ${animationBg} 0.5s ease-in-out forwards;
    &::after {
      animation: 0.75s ${animateLayoutX} 0.5s ease-in-out 2 alternate;
      background: ${props => props.theme.bgPhoto};
      position: absolute;
      width: 0;
      height: 100%;
      right: 0;
      content: '';
      display: block;
      top: 0;
    }
  ` : ''}
  @media ${device.xxl}{
    width: calc(50% - 118px);
    position: relative;
    height: 448px;
  }
  @media ${device.xl}{
    width: calc(40% - 40px);
    position: relative;
    height: 320px;
    margin: auto 0;
  }
  @media ${device.lg}{
    width: 100%;
    height: 620px;
    position: relative;
    z-index:1;
  }
  @media ${device.md}{
    height: 301px;
  }
`
export const TitleBox = styled.div`
  width: 22.5%;
  @media ${device.xxl}{
    width: 25%;
  }
  @media ${device.xl}{
    width: 30%;
  }
  @media ${device.lg}{
    width: 100%;
  }
`
export const DescriptionBox = styled.div<{isAnimationStart: boolean}>`
  width: 27.5%;
  padding-left:52px; 
  position: relative;
  ${props => props.isAnimationStart ? css`
    opacity: 0;
    animation: 0.5s ${fadeRight} 2s linear forwards;
  ` : ''}
  & > svg {
    color: ${props => props.theme.iconDefault};
    display: block;
    margin-left: 10px;
  }
  @media ${device.xxl}{
    width: 25%;
    padding-left:15px;

    & > svg {
      width: 182px;
      height: 163px;
      position: absolute;
      top: 0;
      left: 47%; margin-left: -90px;
    }
  }
  @media ${device.xl}{
    width: 30%;
  }
  @media ${device.lg}{
    width: 100%;
    padding: 0;
    position: static;
    & > svg {
      width: 317px;
      height: 284px;
      position: absolute;
      top: 0;
      left: auto; margin-left: 0px;
      right: 25px;
    }
  }
  @media ${device.lg}{
    & > svg{
      display: none;
    }
  }
` 