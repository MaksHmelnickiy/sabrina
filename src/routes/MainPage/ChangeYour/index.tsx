import React from 'react';
import {useTranslation} from "react-i18next";

import photo1 from '../../../assets/img/photo1.png';
import photo2 from '../../../assets/img/photo2.png';

import { ICONS_MAP } from '../../../constants/icons';
import {
  Container,
  PartTitle,
  Photo,
  CustomTitle,
  PhotoWrapper,
  SvgIcon,
  Text,
  StyledButton
} from './styled';

const ChangeYour = (): React.ReactElement => {
  const {t} = useTranslation()
  return (
    <Container>
      <SvgIcon>
        <ICONS_MAP.Planet />
      </SvgIcon>
      <PhotoWrapper>
        <Photo src={photo1} alt="photo1" />
        <Photo src={photo2} alt="photo2" />
      </PhotoWrapper>
      <StyledButton arrowLong>{t('main.change_your_life')}</StyledButton>
      <CustomTitle variant='h1'>
        {t('main.change_your')}
        <PartTitle>{t('main.monday')}</PartTitle> 
      </CustomTitle>
      <Text>{t('main.we_are_boutique')}</Text>
    </Container>
  );
};

export default ChangeYour;
