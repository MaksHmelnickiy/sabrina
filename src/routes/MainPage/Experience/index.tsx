import React from 'react';
import {useTranslation} from "react-i18next";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import ExperienceList from '../../../components/ExperienceList';
import { ICONS_MAP } from '../../../constants/icons';
import {
  Container, 
  Text,
  IconWrapper,
  StyledButton,
  CustomTitle
} from './styled';

interface Props {
  id?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Experience = ({id, onClick}:Props): React.ReactElement => {
  const {t} = useTranslation()
  const [isAnimateStart, setAnimateStart] = React.useState(false)
  const experienceData = [
    {
      label: t('exp.list.1'),
      icon: <ICONS_MAP.Exp1 />
    },
    {
      label: t('exp.list.2'),
      icon: <ICONS_MAP.Exp2 />
    },
    {
      label: t('exp.list.3'),
      icon: <ICONS_MAP.Exp3 />
    },
    {
      label: t('exp.list.4'),
      icon: <ICONS_MAP.Exp4 />
    },
  ]
  return (
    <Container id={id}>
      <IconWrapper isAnimationStart={isAnimateStart.toString()}><Slide bottom onReveal={() => setAnimateStart(true)} duration={1000}><ICONS_MAP.Plain /></Slide></IconWrapper>
      <CustomTitle variant='h2'><Fade bottom big cascade>{t('exp.title')}</Fade></CustomTitle>
      <Text><Fade bottom>{t('exp.text')}</Fade></Text>
      <ExperienceList data={experienceData} />
      <StyledButton onClick={onClick} variant='secondary'>{t('exp.button')}</StyledButton>
    </Container>
  );
};

export default Experience;
