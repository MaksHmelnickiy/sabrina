import React from 'react';
import {useTranslation} from "react-i18next";
import Fade from 'react-reveal/Fade';

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
  const [isAnimateStart, setAnimateStart] = React.useState(false)
  return (
    <Container id={id}>
      <TitleBox>
        <CustomTitle variant='h2'><Fade bottom big cascade>{t('jobs.title')}</Fade></CustomTitle>
        <Text><Fade onReveal={() => setAnimateStart(true)} bottom delay={400}>{t('jobs.text')}</Fade></Text>
        <StyledButton onClick={onClick} variant='secondary' arrowShort>{t('jobs.button')}</StyledButton>
      </TitleBox>
      <Image isAnimationStart={isAnimateStart} />
      <DescriptionBox isAnimationStart={isAnimateStart}>
        <ICONS_MAP.Pack />
        <Description>{t('jobs.description')}</Description>
      </DescriptionBox>
    </Container>
  );
};

export default Jobs;
