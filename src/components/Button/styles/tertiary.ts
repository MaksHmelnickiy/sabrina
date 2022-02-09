import styled from 'styled-components';
import { DefaultBtnStyles, IButtonBaseProps } from '../styled';

export const TertiaryBtn = styled(DefaultBtnStyles)<IButtonBaseProps>`

color:  ${props => props.theme.buttonTertiary};
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
  max-width: 81px;
  display: block;
  color: ${props => props.theme.buttonTertiaryText};
}
& > div {
  color: ${props => props.theme.buttonTertiaryArrow};
  transform: rotate(0deg);
  position: absolute;
  transition: 0.2s;
  left: -44%;
  top: -19%;
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
${props => {
  if(props.arrowDark) {
    switch (props.arrowPosition) {
      case 'top':
        return `
          & > div {
            left: -44%;
            top: -19%;
            transform: rotate(0deg);
          };
          & > span {
          }
          &:hover {
            & > span {
              transform: rotate(-19.2deg);
            }
            & > div {
              top: -10%;
              transform: rotate(0deg);
              left: -55%;
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
        return ` 
        `;
      default:
        return ` 
        & > div {
            left: -44%;
            top: -19%;
            transform: rotate(0deg);
          };
          & > span {
          }
          &:hover {
            & > span {
              transform: rotate(-19.2deg);
            }
            & > div {
              top: -10%;
              transform: rotate(0deg);
              left: -55%;
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
