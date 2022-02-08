import React from 'react';
import {useTranslation} from "react-i18next";
import videoUrl from '../../../assets/img/video.mp4';
import imgUrl from '../../../assets/img/girlVideo.png';
import Ticker from 'react-ticker'
import { ICONS_MAP } from '../../../constants/icons';
import {
  Container,
  TickerWrapper,
  CustomTitle,
  Text,
  TextContainer,
  ImageContainer,
  SecondaryTitle,
  TickerText,
  VideoContainer,
  StyledButton,
  List,
  Item
} from './styled';

const About = (): React.ReactElement => {
  const {t} = useTranslation()
  const dataList = [
    t('list.1'),
    t('list.2'),
    t('list.3'),
    t('list.4'),
    t('list.5'),
    t('list.6'),
    t('list.7'),
  ]
  return (
    <>
      <TickerWrapper>
        <Ticker speed={10}>
        {({ index }) => (
          <TickerText key ={index}>{t('about_us')}&nbsp;&nbsp;</TickerText>
        )}
        </Ticker>
      </TickerWrapper>
      <Container>
        <TextContainer>
          <SecondaryTitle variant='h3' >{t('we_are_a_headhunting')}</SecondaryTitle>
          <Text>{t('we_does_now')}<br/>{t('we_have_made')}</Text>
          <CustomTitle variant='h4' >{t('what_do_we_do_differently')}</CustomTitle>
          <Text>{t('in_order_to_really')}</Text>
          <CustomTitle variant='h4' >{t('thats_why_we_dont')}</CustomTitle>
          <Text>{t('in_this_way')}</Text>
          <Text>{t('it_is_our_job')}</Text>
          <Text>{t('of_course_even')}</Text>
        </TextContainer>
        <ImageContainer>
          <VideoContainer>
            <video autoPlay muted loop><source  src={videoUrl} type='video/mp4' /></video>
            <img src={imgUrl} alt="Girl" />
            <StyledButton arrowPosition='bottom' arrowShort>{t('change_your_life')}</StyledButton>
          </VideoContainer>
          <List>
            {dataList.map((item, index) => {
              return (
                <Item key={index}>
                  <ICONS_MAP.SnowFlake />
                  {item}
                </Item>
              )
            })}
          </List>
        </ImageContainer>
      </Container>
    </>
  );
};

export default About;
