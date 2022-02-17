import React from 'react';
import {useTranslation} from "react-i18next";
import StickyBox from "react-sticky-box";
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
  Item,
  StyledButtonMobile
} from './styled';

interface Props {
  id?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const About = ({id, onClick}:Props): React.ReactElement => {
  const {t} = useTranslation()
  const dataList = [
    t('about.list.1'),
    t('about.list.2'),
    t('about.list.3'),
    t('about.list.4'),
    t('about.list.5'),
    t('about.list.6'),
    t('about.list.7'),
  ]
  return (
    <>
      <TickerWrapper id={id}>
        <Ticker speed={5}>
        {({ index }) => (
          <TickerText key ={index}>{t('about.title')}&nbsp;&nbsp;</TickerText>
        )}
        </Ticker>
      </TickerWrapper>
      <Container>
        <TextContainer>
          <SecondaryTitle variant='h3' >{t('about.we_are_a_headhunting')}</SecondaryTitle>
          <Text>{t('about.we_does_now')}<br/>{t('about.we_have_made')}</Text>
          <CustomTitle variant='h4' >{t('about.what_do_we_do_differently')}</CustomTitle>
          <Text>{t('about.in_order_to_really')}</Text>
          <CustomTitle variant='h4' >{t('about.thats_why_we_dont')}</CustomTitle>
          <Text>{t('about.in_this_way')}</Text>
          <Text>{t('about.it_is_our_job')}</Text>
          <Text>{t('about.of_course_even')}</Text>
        </TextContainer>
        <ImageContainer>
          <VideoContainer>
            <video autoPlay muted loop><source  src={videoUrl} type='video/mp4' /></video>
            <img src={imgUrl} alt="Girl" />
            <StyledButton onClick={onClick} arrowPosition='bottom' arrowShort>{t('about.button')}</StyledButton>
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
          <StyledButtonMobile onClick={onClick} arrowPosition='bottom' arrowShort>{t('about.button')}</StyledButtonMobile>
        </ImageContainer>
      </Container>
    </>
  );
};

export default About;
