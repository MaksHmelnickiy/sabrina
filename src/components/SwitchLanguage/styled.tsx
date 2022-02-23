import styled from 'styled-components';
import { device } from '../../constants/breakpoints';

interface IItemProps {
  selected: boolean
}
interface ILangShow {
  showOnMobile?: boolean;
}
export const Container = styled.div<ILangShow>`
  color: ${props => props.theme.logoIcon};
  display: flex;
  align-items: center;
  @media ${device.lg}{
    margin-left: auto;
    margin-right: 80px;
  }
  @media ${device.md} {
    margin-right: 30px;
    position: relative;
    bottom: -1px;
    transition: 0.2s;
    ${props => (props.showOnMobile ? `opacity: 1;` : `opacity: 0;`)};
  }
`
export const Item = styled.button<IItemProps>`
  color: ${props => (!props.selected ? props.theme.language : props.theme.languageActive)};
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  cursor: pointer;
  padding: 0;
  background: none;
  border: none;
  position: relative;
  & svg {
    position: absolute;
    top: 50%;
    margin-top: -3.5px;
    left: -10px;
  }
  &:not(:nth-of-type(1)){
    margin-left: 20px;
    
  }
  @media ${device.lg} {
    line-height: 1;
  }
  & > * {
    pointer-events: none;
  }
`