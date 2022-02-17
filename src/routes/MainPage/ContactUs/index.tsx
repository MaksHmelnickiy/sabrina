import React from 'react';
import {useTranslation} from "react-i18next";

import { ICONS_MAP } from '../../../constants/icons';
import {
  Container, 
  Text,
  StyledButton,
  CustomTitle,
  Box,
  Description,
  BoxText,
  Image,
  Wrapper
} from './styled';

interface Props {
  id?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ContactUs = ({id, onClick}:Props): React.ReactElement => {
  const {t} = useTranslation()

  return (
    <Wrapper>
      <Container id={id}>
        <CustomTitle variant='h2'>{t('contact.title')}</CustomTitle>
        <Text>{t('contact.text')}</Text>
        <Box>
          <ICONS_MAP.SnowFlake />
          <Description>{t('contact.description')}</Description>
          <BoxText>{t('contact.offer')}</BoxText>
        </Box>
      </Container>
      <Image>
        <StyledButton onClick={onClick} variant='tertiary' arrowDark>{t('contact.button')}</StyledButton>
      </Image>
    </Wrapper>
  );
};

export default ContactUs;
