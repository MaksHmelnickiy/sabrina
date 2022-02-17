import styled from 'styled-components';
import Logo from '../Logo';
import { Link as Anchor } from 'react-scroll';
import { Link } from 'react-router-dom';
import { device } from '../../constants/breakpoints';

export const Container = styled.div`
  padding: 0 15px;
  background: ${props => props.theme.headerBg};
  @media ${device.lg}{
    padding: 0 50px;
  }
`
export const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 40%;
  @media ${device.xxl}{
    width: 34%;
  }
  @media ${device.xl}{
    width: calc(40% - 50px);
  }
  @media ${device.lg}{
    width: 100%;
    padding-bottom: 28px;
    border-bottom: 1px solid rgba(105, 110, 118, 0.4);
  }
`
export const Item = styled.li`
  padding-left: 10px;
  padding-right: 10px;
  width: 33.3333%;
  margin-bottom: 23px;
  @media ${device.xxl}{
    width: 50%;
  }
  @media ${device.lg}{
    width: 33.3333%;
    padding-left: 0px;
    padding-right: 0px;
  }
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
  margin-right: 25px;
  &  div {
    color: ${props => props.theme.logoIcon} !important;
  }
  @media ${device.xxl}{
    margin-right: 25px;
    & svg {
      width: 26px;
    }
  } 
  @media ${device.lg}{
    display: none;
  }
`

export const FooterTop = styled.div`
  max-width: 1520px;
  width: 100%;
  margin-left: auto;
  padding-top: 103px;
  padding-bottom: 24px;
  margin-right: auto;
  border-bottom: 1px solid rgba(105, 110, 118, 0.4);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media ${device.xxl}{
    max-width: 1200px;
    padding-bottom: 27px;
  }
  @media ${device.xl}{
    max-width: 1000px;
    padding-bottom: 27px;
  }
  @media ${device.lg}{
    display: block;
    max-width: none;
    margin-left: 0;
    margin-right: 0;
    padding-top: 51px;
    padding-bottom: 18px;
  }
`
export const FooterBottom = styled.div`
  max-width: 1520px;
  width: 100%;
  padding: 50px 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  @media ${device.xxl}{
    max-width: 1200px;
    
  }
  @media ${device.xxl}{
    max-width: 1000px;
    
  }
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
  left: -150px;
  @media ${device.xxl}{
    left: -107px;
  }
  @media ${device.xl}{
    left: 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    top: -10px;
    margin-bottom: 22px;
  }
  @media ${device.lg}{
    top: 0;
    display: block;
  }
`
export const SocialLabel = styled.div`
  color: ${props => props.theme.footerLink};
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 16px;
  @media ${device.xxl}{
    margin-bottom: 19px;
  }
  @media ${device.xl}{
    margin-bottom: 0px;
  }
  @media ${device.lg}{
    margin-bottom: 15px;
  }
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
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.headerLinkHover};
    border-color: ${props => props.theme.headerLinkHover};
  }
`
export const SocialBox = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${device.xl}{
    width: auto;
    display: block;
    max-width: 364px;
  }
  @media ${device.lg}{
    width: 100%;
    display: flex;
    max-width: none;
    padding-top: 40px;
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