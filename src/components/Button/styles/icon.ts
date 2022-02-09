import styled from 'styled-components';
import { DefaultBtnStyles, IButtonBaseProps } from '../styled';

export const IconBtn = styled(DefaultBtnStyles)<IButtonBaseProps>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.footerLink};
  background: none;
  color: ${props => props.theme.footerLink};
  transition: 0.2s;
  &:hover {
    color: ${props => props.theme.headerLinkHover};
    border-color: ${props => props.theme.headerLinkHover};
  }
`;
