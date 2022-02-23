import styled, {keyframes, css} from 'styled-components';
import { device } from '../../constants/breakpoints';

interface IStrokeProps {
  top: string;
  left: string;
  bottom: string;
  right: string;
  isAnimationStart: boolean;
  delay: string;
  zIndex: string;
  rotate: number;
}

const stroke = keyframes`
  from{
    stroke-dashoffset: 415;
    stroke-dasharray: 415;
    opacity: 0;
  }
  to {
    stroke-dashoffset: 0;
    stroke-dasharray: 415;
    opacity: 1;
  }
`

export const Container = styled.div<IStrokeProps>`
  position: absolute;
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  top: ${props => props.top};
  width: 176px;
  height: 55.5px;
  ${props => props.rotate && `transform: rotate(${props.rotate}deg); width: 150px;`};
  z-index: ${props => props.zIndex};
  & svg{
    width: 100%;
    color: ${props => props.theme.stroke};
    ${props => props.isAnimationStart ? css`animation: 1.5s ${stroke} ${props.delay} linear forwards;`: ''}
    opacity: 0;
  }
  & > div{
    position: absolute;
    width: 0;
    padding: 0;
    height: 0;
    opacity: 0;
  }
  @media ${device.lg}{
    width: 155px;
    height: 50px;
  }
`



