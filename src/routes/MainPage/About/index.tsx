import React from 'react';
import {useTranslation} from "react-i18next";
import photo1 from '../../../assets/img/photo1.png';
import photo2 from '../../../assets/img/photo2.png';
import Button from '../../../components/Button';
import Ticker from 'react-ticker'
import { ICONS_MAP } from '../../../constants/icons';
import {
  Container,
  TickerWrapper,
  CustomTitle,
  Flex,
  TextContainer,
  ImageContainer,
  SecondaryTitle,
} from './styled';

const About = (): React.ReactElement => {
  const {t} = useTranslation()
  return (
    <>
      <TickerWrapper>
        <Ticker speed={10}>
        {({ index }) => (
          <CustomTitle key ={index}>{t('about_us')}&nbsp;&nbsp;</CustomTitle>
        )}
        </Ticker>
      </TickerWrapper>
      <Container>
        <Flex>
          <TextContainer>
            <SecondaryTitle variant='h3' >{t('we_are_a_headhunting')}</SecondaryTitle>
          </TextContainer>
          <ImageContainer>

          </ImageContainer>
        </Flex>
      </Container>
    </>
  );
};

export default About;
