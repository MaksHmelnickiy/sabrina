import React from 'react';
import {useTranslation} from "react-i18next";
import { ICONS_MAP } from '../../../constants/icons';
import {
  Container, 
  Text,
  CustomTitle
} from './styled';

const Network = (): React.ReactElement => {
  const {t} = useTranslation()

  return (
    <Container>
      <CustomTitle variant='h2'>{t('net.title')}</CustomTitle>
      <Text>{t('net.text')}</Text>
    </Container>
  );
};

export default Network;
