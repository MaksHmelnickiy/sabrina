import styled from 'styled-components';
import { device } from '../../constants/breakpoints';

interface IItemProps {
  selected: boolean
}

export const Container = styled.div`
  color: ${props => props.theme.logoIcon};
  display: flex;
  align-items: center;
  @media ${device.lg}{
    margin-left: auto;
    margin-right: 80px;
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
  
`