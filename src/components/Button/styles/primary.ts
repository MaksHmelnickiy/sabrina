import styled from 'styled-components';
import { DefaultBtnStyles, IButtonBaseProps } from '../styled';

export const PrimaryBtn = styled(DefaultBtnStyles)<IButtonBaseProps>`
  color:  ${props => props.theme.buttonPrimary};
  z-index: 1;
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
`;
