import styled from 'styled-components';
import { DefaultBtnStyles, IButtonBaseProps } from '../styled';

export const Secondary = styled(DefaultBtnStyles)<IButtonBaseProps>`

color:  ${props => props.theme.buttonSecondary};
background: none;
padding: 0;
border-radius: 50%;
width: 246px;
height: 246px;
display: flex;
& i {
  position: relative;
  z-index: 1;
  font-style: normal;
  font-family: 'Biotif';
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-transform: uppercase;
  max-width: 101px;
  display: block;
  color: ${props => props.theme.buttonSecondaryText};
  transition: 0.2s;
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
  transform: rotate(-19.2deg);
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
  color:  ${props => props.theme.buttonSecondaryHover};
  & i {
    color:  ${props => props.theme.buttonSecondaryTextHover};
  }
  & > span {
    transform: rotate(19.2deg);
  }
  & > div {
    top: -27%;
  }
}
${props => {
  if(props.arrowShort) {
    switch (props.arrowPosition) {
      case 'top':
        return `

        `;
      case 'left':
        return `

        `;
      case 'right':
        return `

        `;
      case 'bottom':
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
          top: -27%;
        }
      }
    `
  }
}};

`;
