import React from 'react';
import {useTranslation} from "react-i18next";
import ExperienceList from '../../../components/ExperienceList';
import { ICONS_MAP } from '../../../constants/icons';
import {
  Container, 
  Text,
  IconWrapper,
  StyledButton,
  CustomTitle
} from './styled';

const Experience = (): React.ReactElement => {
  const {t} = useTranslation()
  const experienceData = [
    {
      label: t('exp.1'),
      icon: <ICONS_MAP.Exp1 />
    },
    {
      label: t('exp.2'),
      icon: <ICONS_MAP.Exp2 />
    },
    {
      label: t('exp.3'),
      icon: <ICONS_MAP.Exp3 />
    },
    {
      label: t('exp.4'),
      icon: <ICONS_MAP.Exp4 />
    },
  ]
  return (
    <Container>
      <IconWrapper><ICONS_MAP.Plain /></IconWrapper>
      <CustomTitle variant='h2'>{t('exp.title')}</CustomTitle>
      <Text>{t('exp.text')}</Text>
      <ExperienceList data={experienceData} />
      <StyledButton variant='secondary'>{t('change_your_life')}</StyledButton>
    </Container>
  );
};

export default Experience;