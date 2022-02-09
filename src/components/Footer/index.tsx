import React from 'react';
import {useTranslation} from "react-i18next";
import { ICONS_MAP } from '../../constants/icons';
import {
  Container, 
  Item, 
  MenuList, 
  StyledLink, 
  FooterTop, 
  CustomLogo, 
  FooterBottom, 
  Text, 
  Social,
  SocialLabel,
  SocialList,
  SocialLink,
  LinkEmail,
  CustomButton,
  Box,
  FooterLink
} from './styled';


const Footer = (): React.ReactElement => {
  const {t} = useTranslation()

  return (
    <Container>
      <FooterTop> 
        <CustomLogo />
        <MenuList>
          <Item>
            <StyledLink spy={true} smooth={true} to='main'>{t('footer.menu.1')}</StyledLink>
          </Item>
          <Item>
            <StyledLink spy={true} smooth={true} to='about'>{t('footer.menu.2')}</StyledLink>
          </Item>
          <Item>
            <StyledLink spy={true} smooth={true} offset={-20} to='network'>{t('footer.menu.3')}</StyledLink>
          </Item>
          <Item>
            <StyledLink spy={true} smooth={true} to='contact'>{t('footer.menu.4')}</StyledLink>
          </Item>
          <Item>
            <StyledLink spy={true} smooth={true} to='exp'>{t('footer.menu.5')}</StyledLink>
          </Item>
          <Item>
            <StyledLink spy={true} smooth={true} to='jobs'>{t('footer.menu.6')}</StyledLink>
          </Item>
        </MenuList>
        <Social>
          <SocialLabel>{t('footer.social')}</SocialLabel>
          <SocialList>
            <SocialLink to='/'><ICONS_MAP.Instagram /></SocialLink>
            <SocialLink to='/'><ICONS_MAP.Facebook /></SocialLink>
            <SocialLink to='/'><ICONS_MAP.Telegram /></SocialLink>
          </SocialList>
        </Social>
        <Box>
          <LinkEmail to='/'>{t('footer.button')}</LinkEmail>
          <CustomButton spy={true} smooth={true} to='main'><ICONS_MAP.Up /></CustomButton>
        </Box>
      </FooterTop> 
      <FooterBottom>
        <Text>{t('footer.text')}</Text>
        <FooterLink to='/'>{t('footer.policy')}</FooterLink>
        <FooterLink to='/'>{t('footer.term')}</FooterLink>
      </FooterBottom>
    </Container>
  );
};

export default Footer;
