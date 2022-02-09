import styled from 'styled-components';
import Logo from '../Logo';
import { Link as Anchor } from 'react-scroll';
import { Link } from 'react-router-dom';
import Button from '../Button';

export const Container = styled.div`
  padding: 0 15px;
  background: ${props => props.theme.headerBg};
`
export const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 40%;
`
export const Item = styled.li`
  padding-left: 10px;
  padding-right: 10px;
  width: 33.3333%;
  margin-bottom: 23px;
`
export const StyledLink = styled(Anchor)`
  color: ${props => props.theme.footerLink};
  display: block;
  transition: 0.2s;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.headerLinkHover};
  }
`;
export const CustomLogo = styled(Logo)`
margin-right: 87px;
  &  div {
    color: ${props => props.theme.logoIcon} !important;
  }
`

export const FooterTop = styled.div`
  max-width: 1520px;
  width: 100%;
  margin-left: auto;
  padding-top: 103px;
  padding-bottom: 41px;
  margin-right: auto;
  border-bottom: 1px solid rgba(105, 110, 118, 0.4);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export const FooterBottom = styled.div`
  max-width: 1520px;
  width: 100%;
  padding: 50px 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`
export const Text = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  color: ${props => props.theme.footerLink};
  font-family: 'Biotif';
  opacity: 0.7;
`
export const Social = styled.div`
  position: relative;
  left: -80px;
`
export const SocialLabel = styled.div`
  color: ${props => props.theme.footerLink};
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 23px;
`
export const SocialList = styled.div`
  display: flex;
`
export const SocialLink = styled(Link)`
  color: ${props => props.theme.footerLink};
  transition: 0.2s;
  margin-right: 34px;
  cursor: pointer;
  &:nth-last-of-type(1){
    margin-right: 0;
  }
  &:hover {
    color: ${props => props.theme.headerLinkHover};
  }
`
export const LinkEmail = styled(Link)`
  height: 80px;
  cursor: pointer;
  white-space: nowrap;
  padding: 0 26px;
  color: ${props => props.theme.footerLink};
  display: flex;
  align-items:center;
  justify-content: center;
  font-weight: 600;
  font-size: 19px;
  font-family: 'Biotif';
  background: ${props => props.theme.linkEmail}; 
  border-radius: 43px;
  border: 1px solid rgba(255,255,255,0);
  padding-top: 2px;
  transition: 0.2s;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    border-color: ${props => props.theme.headerLinkHover};
    color: ${props => props.theme.headerLinkHover};
  }
`
export const CustomButton = styled(Anchor)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.footerLink};
  background: none;
  color: ${props => props.theme.footerLink};
  transition: 0.2s;
  margin-left: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: ${props => props.theme.headerLinkHover};
    border-color: ${props => props.theme.headerLinkHover};
  }
`
export const Box = styled.div`
  display: flex;
`
export const FooterLink = styled(Link)`
  display: flex;
  cursor: pointer;
  color: ${props => props.theme.footerLink};
  transition: 0.2s;
  font-weight:400;
  font-size: 14px;
  line-height: 24px;
  opacity: 0.7;
  font-family: 'Biotif';
  margin-left: 44px;
  &:hover {
    color: ${props => props.theme.headerLinkHover};
    opacity: 1;
  }
`