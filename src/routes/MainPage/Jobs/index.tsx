import React from 'react';
import {useTranslation} from "react-i18next";

import { ICONS_MAP } from '../../../constants/icons';
import {
  Container, 
  Text,
  StyledButton,
  CustomTitle,
  TitleBox,
  Description,
  Image,
  DescriptionBox
} from './styled';

interface Props {
  id?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Jobs = ({id, onClick}:Props): React.ReactElement => {
  const {t} = useTranslation()

  return (
    <Container id={id}>
      <TitleBox>
        <CustomTitle variant='h2'>{t('jobs.title')}</CustomTitle>
        <Text>{t('jobs.text')}</Text>
        <StyledButton onClick={onClick} variant='secondary' arrowShort>{t('jobs.button')}</StyledButton>
      </TitleBox>
      <Image />
      <DescriptionBox>
        <ICONS_MAP.Pack />
        <Description>{t('jobs.description')}</Description>
      </DescriptionBox>
    </Container>
  );
};

export default Jobs;
