import React from 'react';
import {useTranslation} from "react-i18next";
import Fade from 'react-reveal/Fade';
import Stroke from '../../../components/Stroke';
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
  const [isAnimateStart, setAnimateStart] = React.useState(false);
  const {t} = useTranslation()

  return (
    <Wrapper>
      <Container id={id}>
        <CustomTitle variant='h2'><Stroke delay='1s' bottom='5px' right='-15px' zIndex='0'/><Fade bottom big cascade>{t('contact.title')}</Fade></CustomTitle>
        <Text><Fade onReveal={() => setAnimateStart(true)} bottom delay={600}>{t('contact.text')}</Fade></Text>
        <Box isAnimationStart={isAnimateStart}>
          <ICONS_MAP.SnowFlake />
          <Description>{t('contact.description')}</Description>
          <BoxText>{t('contact.offer')}</BoxText>
        </Box>
      </Container>
      <Image isAnimationStart={isAnimateStart}>
        <StyledButton onClick={onClick} variant='tertiary' arrowDark>{t('contact.button')}</StyledButton>
      </Image>
    </Wrapper>
  );
};

export default ContactUs;
