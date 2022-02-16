import styled from 'styled-components';
import { Link } from 'react-scroll';
import { device } from '../../constants/breakpoints';

interface IHeaderProps {
  show?: boolean;
  minScroll?: boolean;
}

export const Container = styled.div<IHeaderProps>`
  padding-top: 30px;
  position: fixed;
  left:0;
  right: 0;
  z-index: 5;
  padding-bottom: 30px;
  top:0;
  transition: 0.2s;
  background: rgba(255,255,255,0);
  ${props => props.minScroll ? `
    background: ${props.theme.headerBg};
  ` : ``}
  ${props => props.show ? `top: -100px;` : `top: 0;`
}
  @media ${device.xl} {
    padding: 25px 0;
  }
`
export const MenuList = styled.ul`
  display: flex;
`
export const Item = styled.li`
  padding-left: 30px;
  padding-right: 30px;
`
export const StyledLink = styled(Link)`
  display: flex;
  color: ${props => props.theme.headerLink};
  transition: 0.2s;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.headerLinkHover};
  }
`;
export const Wrapper = styled.div`
  max-width: 1550px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.xxl}{
    max-width: 1230px;
  };
  @media ${device.xl} {
    max-width: 1000px;
  }


`
export const Gamburger = styled.div`
  
`