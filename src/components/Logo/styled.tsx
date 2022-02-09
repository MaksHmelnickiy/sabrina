import styled from 'styled-components';
import { Link } from 'react-scroll';

interface ILogoProps {
  className?: string 
}

export const Container = styled(Link)<ILogoProps>`
  color: ${props => props.theme.logoIcon};
  display: flex;
  cursor: pointer;
  align-items: center;
  & * {
    pointer-events: none;
  }
`
export const Text = styled.div`
  color: ${props => props.theme.logoText};
  margin-left: 7px;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
`