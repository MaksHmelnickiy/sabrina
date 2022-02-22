import styled, {keyframes, css} from 'styled-components';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import { device } from '../../../constants/breakpoints';

const showAnimate = keyframes`
  0% {
    opacity: 0;
  };
  100% {
    opacity: 1;
  };
`

export const Container = styled.div`
  max-width: 1520px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 214px;
  position: relative;
  padding-bottom: 240px;
  @media ${device.xxl}{
    max-width: 1200px;
    padding-top: 117px;
  }
  @media ${device.xl}{
    max-width: 1000px;
    padding-top: 117px;
    padding-bottom: 104px;
  }
  @media ${device.lg}{
    max-width: none;
    padding-top: 109px;
    padding-bottom: 104px;
  }
  @media ${device.md}{
    max-width: none;
    padding-top: 66px;
    padding-bottom: 104px;
  }
`
export const StyledButton = styled(Button)`
  position: absolute; 
  left: 181px;
  bottom: 49px;
  z-index: 3;
  & > div {
    color: ${props => props.theme.buttonPrimaryArrow};
  }
  @media ${device.xl}{
    left: auto;
    bottom: -32px;
    right: 82px;
  }
  @media ${device.lg}{
    bottom: -6px;
    right: 50%;
    margin-right: -95px;
  }
  @media ${device.md}{
    bottom: 3px;
    right: 50%;
    margin-right: -84px;
  }
`
export const Text = styled.div`
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  padding-top: 34px;
  padding-bottom: 38px;
  color: ${props => props.theme.text};
  font-family: 'Biotif';
  max-width: 742px;
  @media ${device.xxl}{
    padding-top: 24px;
  }
  @media ${device.xl}{
    padding-bottom: 23px
  }
`
export const IconWrapper = styled.div<{isAnimationStart: string}>`
  color: ${props => props.theme.iconDefault};
  position: absolute;
  right: 76px;
  top: 86px;
  & path:nth-of-type(2){
    opacity: 0;
    ${props => props.isAnimationStart === 'true' ? css`
      animation: 2s ${showAnimate} 1s linear;
      animation-fill-mode: forwards;
  `: '' }
  }
  @media ${device.xxl}{
    width: 166px;
    right: 52px;
    top: 38px;
    & svg {
      max-width: 100%;
    }
  }
  @media ${device.xl}{
    top: 140px;
  }
  @media ${device.lg}{
    top: 109px;
    right: -3px;
  }
  @media ${device.md}{
    top: 84px;
    right: -23px;
    width: 100px;
    height: 147px;
    &  svg {
      max-width: 100%;
      max-height: 100%;;
    }
  }
`
export const CustomTitle = styled(Title)`
  padding-right: 375px;
  @media ${device.xxl}{
    padding-right: 275px;
  }
  @media ${device.xl}{
    padding-right: 0;
    max-width: 500px;
  }
  @media ${device.xl}{
    padding-right: 63px;
  }
`