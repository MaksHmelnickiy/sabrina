import {keyframes} from 'styled-components';

export const animateArrowTop = keyframes`
  from{
    transform: rotate(90deg) translate(70px, 100px);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
`
export const animateArrow = keyframes`
  from{
    transform: rotate(45deg) translate(-100px, -100px);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
`
export const animateBuble = keyframes`
  from{
    transform: scale(0) rotate(45deg);
    opacity: 0;
  }
  to {
    transform: scale(1) rotate(0);
    opacity: 1;
  }
`
export const fadeLeft = keyframes`
  from{
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`
export const fadeRight = keyframes`
  from{
    transform: translateX(100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`
export const fadeRightXl = keyframes`
  from{
    transform: translateX(-200px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`
export const animationExpListArrow1 = keyframes`
  from{
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`
export const animationExpListArrow2 = keyframes`
  from{
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`
export const animationExpListArrow3 = keyframes`
  from{
    transform: translateX(50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`
export const animateLayoutY = keyframes`
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
export const animateLayoutX = keyframes`
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
`;
export const opacity = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`
export const animationBg = keyframes`
  from {
    background-position: 1000px 0;
  }

  to {
    background-position: center top;
  }
`;
