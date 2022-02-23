import React from 'react';
import {useTranslation} from "react-i18next";
import videoUrl from '../../../assets/img/video.mp4';
import imgUrl from '../../../assets/img/girlVideo.png';
import Fade from 'react-reveal/Fade';
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
  StyledButtonMobile,
  Animation
} from './styled';
import Slide from 'react-reveal/Slide';
import Stroke from '../../../components/Stroke';

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
            <SecondaryTitle variant='h3' ><Fade bottom big cascade>{t('about.we_are_a_headhunting')}</Fade></SecondaryTitle>
            <Text>
              <Stroke delay='1s' bottom='44px' left='10%' zIndex='0'/>
              <Fade bottom delay={200}>{t('about.we_does_now')}<br/>{t('about.we_have_made')}</Fade>
            </Text>
            <CustomTitle variant='h4'><Fade bottom delay={300} big cascade>{t('about.what_do_we_do_differently')}</Fade></CustomTitle>
            <Text>
              <Stroke delay='1s' bottom='34px' right='10%' rotate={200} zIndex='0'/>
              <Fade bottom delay={400}>{t('about.in_order_to_really')}</Fade>
            </Text>
            <CustomTitle variant='h4'><Fade bottom delay={500} big cascade>{t('about.thats_why_we_dont')}</Fade></CustomTitle>
            <Text><Fade bottom delay={400}>{t('about.in_this_way')}</Fade></Text>
            <Text><Stroke delay='1s' top='0px' right='40%' rotate={200} zIndex='0'/><Fade bottom delay={400}>{t('about.it_is_our_job')}</Fade></Text>
            <Text><Fade bottom delay={400}>{t('about.of_course_even')}</Fade></Text>
          </TextContainer>
        <ImageContainer>
          <VideoContainer>
            <Animation>
              <Slide delay={800} right><video autoPlay muted loop><source  src={videoUrl} type='video/mp4' /></video></Slide>
              <Slide delay={800} right />
            </Animation>
            <Fade delay={200}><img src={imgUrl} alt="Girl" /></Fade>
            <StyledButton onClick={onClick} arrowPosition='bottom' arrowShort>{t('about.button')}</StyledButton>
          </VideoContainer>
            <List>
              <Fade bottom delay={300}>
              {dataList.map((item, index) => {
                return (
                  <Item key={index}>
                    <ICONS_MAP.SnowFlake />
                    {item}
                  </Item>
                )
              })}
              </Fade>
            </List>
          <StyledButtonMobile onClick={onClick} arrowPosition='bottom' arrowShort>{t('about.button')}</StyledButtonMobile>
        </ImageContainer>
      </Container>
    </>
  );
};

export default About;
