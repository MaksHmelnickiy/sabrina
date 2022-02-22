import React from 'react';
import styled, {keyframes, css} from 'styled-components';

export interface IButtonBaseProps extends React.ComponentProps<'button'> {
  endIcon?: React.ReactElement;
  startIcon?: React.ReactElement;
  arrowPosition?: 'top' | 'left' | 'right' | 'bottom';
  arrowLong?: boolean;
  arrowShort?: boolean;
  arrowDark?: boolean;
  isAnimationStart: boolean;
}

const animateArrow = keyframes`
  from{
    transform: rotate(45deg) translate(-100px, -100px);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
`
const animateBuble = keyframes`
  from{
    transform: scale(0) rotate(45deg);
    opacity: 0;
  }
  to {
    transform: scale(1) rotate(0);
    opacity: 1;
  }
`

export const DefaultBtnStyles = styled.button<IButtonBaseProps>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  & * {
    pointer-events: none;
  }
  & > span > svg {
    opacity: 0;
    ${props => props.isAnimationStart ? css`animation: 0.5s ${animateBuble} 0.5s linear forwards;` : ''}
  }
  & > span i {
    opacity: 0;
    ${props => props.isAnimationStart ? css`animation: 0.5s ${animateBuble} 0.5s linear forwards;` : ''}
  }
  & > div > svg {
    opacity: 0;
    ${props => props.isAnimationStart ? css`animation: 0.5s ${animateArrow} 1s linear forwards;` : ''}
  }
`;

export const ArrowLongIcon = styled.div`
  position: absolute;
  z-index: 1;
`
export const ArrowShortIcon = styled.div`
  
`
export const Text = styled.span`

`
export const ArrowDarkIcon = styled.div`
  z-index: 1;
`