import styled, {keyframes, css} from 'styled-components';
import Button from '../../../components/Button';
import Title  from '../../../components/Title';

import { device } from '../../../constants/breakpoints';

const showTop = keyframes`
  0 {
    height: 0;
  }
  50% {
    height: 100%;
  }
  100% {
    height: 0px;
  }
`;
const PhotoAnimation = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`

export const Container = styled.div`
  max-width: 1520px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 148px 0px 209px 0px;
  position: relative;
  @media ${device.xxl}{
   max-width: 1200px; 
   padding: 133px 0 209px 0;
  }
  @media ${device.xl}{
    max-width: 1000px; 
   }
  @media ${device.lg}{
    max-width: none;
    padding: 148px 0px 209px 0px;
  }
  @media ${device.md}{
    padding: 142px 0px 191px 0px;
  }
`;

export const PartTitle = styled.div`
  text-align: right;
`;

export const Photo = styled.img<{isAnimationStart: boolean}>`
  width: 100%;
  display: block;
  opacity: 0;
  ${props => props.isAnimationStart ? css`animation: 0.1s ${PhotoAnimation} 1.8s ease-in-out; animation-fill-mode: forwards;` : ''}
`;
export const PhotoItem = styled.div<{isAnimationStart: boolean}>`
  position: relative;
  &:after {
    display: block;
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 0;
    background: ${props => props.theme.bgPhoto};
    ${props => props.isAnimationStart ? css`animation: 1.5s ${showTop} 1s ease-in-out; animation-fill-mode: forwards;` : ''}
  }
`
export const PhotoWrapper = styled.div`
overflow: hidden;
  & > div {
    max-width: calc(50% - 13px);
    &:nth-of-type(2){
      margin-top: 98px;
    }
    @media ${device.xl}{
      &:nth-of-type(2){
        margin-top: 103px;
      }
      &:nth-of-type(1){
        margin-top: 20px;
      }
    }
    @media ${device.lg}{
      max-width: calc(50% - 5px);
      &:nth-of-type(2){
        margin-top: 78px;
      }
    }
    @media ${device.md} {
      &:nth-of-type(2){
        margin-top: 61px;
      }
    }

    &:nth-of-type(2){
      &:after {
        top: auto;
        bottom: 0;
      }
    }
  }
  max-width: 756px;
  width: 100%;
  position: absolute;
  left: 50%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  transform: translateX(-50%);
  top: 0;
  @media ${device.xxl}{
    max-width: 716px;
  }
  @media ${device.xl}{
    max-width: 660px;
  }
  @media ${device.lg}{
    max-width: 440px;
  }
`;
export const SvgIcon = styled.div`
  color: ${props => props.theme.iconDefault};
  position: absolute;
  left: 50%;
  margin-left: 19%;
  top: 8px;
  & svg{
    max-width: 100%;
  }
  @media ${device.xxl}{
    width: 167px;
    top: -6px;
    margin-left: 9%;
  }
  @media ${device.xl}{
    width: 167px;
    top: -78px;
    margin-left: 0;
    left: 87px;
  }
  @media ${device.lg}{
    width: 111px;
    left: 56px;
  }
  @media ${device.md}{
    width: 87px;
    height: 100px;
    left: 36px;
    top: -35px;
    & > svg {
      max-height: 100%;
    }
  }
`;
export const Part = styled.div<{isState: boolean}>`
  ${props => props.isState ? `
    &:nth-of-type(1){
      display: none;
    }
    &:nth-of-type(2){
      display: block;
    }
    ` : `
    &:nth-of-type(1){
      display: block;
    }
    &:nth-of-type(2){
      display: none;
    }
  `}
`
export const Text = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  font-family: 'Biotif';
  max-width: 282px;
  text-align: right;
  position: absolute;
  right: 0;
  top: 44%;
  transform: translateY(-50%);
  color: ${props => props.theme.boutiqueText};
  @media ${device.xxl}{
    max-width: 175px;
    top: 16%;
  }
  @media ${device.xl}{
    max-width: 282px;
    top: 7%;
    right: 17%;
  }
  @media ${device.lg}{
    right: 0%;
    top: 7%;
  }
  @media ${device.md}{
    right: 0%;
    top: 4%;
    font-size: 14px;
    max-width: 200px;
    line-height: 140%;
  }
`;

export const StyledButton = styled(Button)`
  position: absolute;
  bottom: 20%;
  left: 19%;
  z-index: 2;
  @media ${device.xxl}{
    left: 13%;
  }
  @media ${device.xl}{
    left: 8%;
  }
  @media ${device.lg}{
    left: 50%;
    transform: translateX(-50%);
    bottom: -3%;
  }
`;
export const CustomTitle = styled(Title)`
  position: relative;
  z-index: 1;

  @media ${device.md}{
    text-align: center;
    & > div {
      text-align: center;
    }
  }
`;