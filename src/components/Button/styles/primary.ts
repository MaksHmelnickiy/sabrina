import styled, {keyframes, css} from 'styled-components';
import { device } from '../../../constants/breakpoints';
import { DefaultBtnStyles, IButtonBaseProps } from '../styled';

const animateArrowTop = keyframes`
  from{
    transform: rotate(90deg) translate(70px, 100px);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
`

export const PrimaryBtn = styled(DefaultBtnStyles)<IButtonBaseProps>`
  color:  ${props => props.theme.buttonPrimary};
  background: none;
  padding: 0;
  border-radius: 50%;
  width: 189px;
  height: 189px;
  display: flex;
  & i {
    position: relative;
    z-index: 1;
    font-style: normal;
    font-family: 'Biotif';
    font-weight: 450;
    font-size: 18px;
    line-height: 24px;
    max-width: 101px;
    display: block;
    color: ${props => props.theme.buttonPrimaryText};
  }
  & > div {
    color: ${props => props.theme.buttonPrimaryArrow};
    transform: rotate(0deg);
    position: absolute;
    transition: 0.2s;
    left: -72%;
    top: -31%;
    z-index:1;
  }
  & > span {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(19.2deg);
    transition: 0.2s;
    & > svg{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  &:hover {
    & > span {
      transform: rotate(-19.2deg);
    }
    & > div {
      top: -27%;
    }
  }
  @media ${device.lg}{
    width: 165px;
    height: 165px;
    & i{
      text-transform: uppercase;
      font-size: 16px;
    }
  }
  ${props => {
    if(props.arrowShort) {
      switch (props.arrowPosition) {
        case 'top':
          return `
            & > div {
              left: -36%;
              top: -31%;
              transform: rotate(186deg);
            };
            & > span {
              transform: rotate(19.2deg);
            }
            &:hover {
              & > span {
                transform: rotate(-19.2deg);
              }
              & > div {
                top: 0%;
                transform: rotate(160deg);
                left: -50%;
              }
            }
          `;
        case 'left':
          return `

          `;
        case 'right':
          return `

          `;
        case 'bottom':
          return css` 
          & > div {
            left: 79%;
            top: 63%;
          };
          & > span {
            transform: rotate(-19.2deg);
          }
          &:hover {
            & > span {
              transform: rotate(19.2deg);
            }
            & > div {
              top: 30%;
              transform: rotate(-20deg);
            }
          }
          & > div > svg {
            opacity: 0;
            ${props.isAnimationStart ? css`animation: 0.5s ${animateArrowTop} 1s linear forwards;` : ''}
          }
          `;
        default:
          return ` 
          & > div {
            left: 79%;
            top: 63%;
          };
          & > span {
            transform: rotate(-19.2deg);
          }
          &:hover {
            & > span {
              transform: rotate(19.2deg);
            }
            & > div {
              top: 30%;
              transform: rotate(-20deg);
            }
          }
          `;
      }
    } if(props.arrowLong) {
      return `
        & > div {
          left: -72%;
          top: -31%;
        }
        & > span {
          transform: rotate(19.2deg);
        }
        &:hover {
          & > span {
            transform: rotate(-19.2deg);
          }
          & > div {
            top: -50%;
            transform: rotate(15deg);
            left: -55%;
          }
        }
        @media ${device.lg}{
          & > div{
            width: 140px;
            left: -65%;
            top: -40%;
            & svg {
              max-width:100%;
            }
          }
        }
      `
    }
  }};
`;
