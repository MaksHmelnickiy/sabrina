import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Container = styled.div`
  padding-top: 30px;
  position: fixed;
  left:0;
  right: 0;

  z-index: 5;
  padding-bottom: 30px;
  background: ${props => props.theme.headerBg};
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
`
