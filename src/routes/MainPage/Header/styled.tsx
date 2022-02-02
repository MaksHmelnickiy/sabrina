import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;

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
  &:hover {
    color: ${props => props.theme.headerLinkHover};
  }
`;