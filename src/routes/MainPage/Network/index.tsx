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

const Network = (): React.ReactElement => {
  const {t} = useTranslation()

  return (
    <>
      <Container>
        <CustomTitle variant='h2'>{t('net.title')}</CustomTitle>
        <Text>{t('net.text')}</Text>
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
