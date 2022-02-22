import React from 'react';
import {useTranslation} from "react-i18next";
import { ICONS_MAP } from '../../../constants/icons';
import Ticker from 'react-ticker'
import {
  Container, 
  Text,
  CustomTitle,
  TickerWrapper,
  Brand,
  BrandContainer,
} from './styled';
import Fade from 'react-reveal/Fade';

interface Props {
  id?: string;
}

const Network = ({id}:Props): React.ReactElement => {
  const {t} = useTranslation()

  return (
    <>
      <Container id={id}>
        <CustomTitle variant='h2'><Fade bottom big cascade>{t('net.title')}</Fade></CustomTitle>
        <Text><Fade bottom delay={400}>{t('net.text')}</Fade></Text>
      </Container>
      <TickerWrapper>
        <Ticker speed={5}>
          {({ index }) => (
            <BrandContainer key ={index}>
              <Brand>
                <ICONS_MAP.BrandCircle1 />
                <ICONS_MAP.Brand1 />
              </Brand>
              <Brand>
                <ICONS_MAP.BrandCircle2 />
                <ICONS_MAP.Brand2 />
              </Brand>
              <Brand>
                <ICONS_MAP.BrandCircle3 />
                <ICONS_MAP.Brand3 />
              </Brand>
            </ BrandContainer>
          )}
        </Ticker>
      </TickerWrapper>
    </>
  );
};

export default Network;
