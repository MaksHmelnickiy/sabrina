import React from 'react';
import {useTranslation} from "react-i18next";

import photo1 from '../../../assets/img/photo1.png';
import photo2 from '../../../assets/img/photo2.png';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { ICONS_MAP } from '../../../constants/icons';
import {
  Container,
  PartTitle,
  Photo,
  CustomTitle,
  PhotoWrapper,
  SvgIcon,
  Text,
  StyledButton,
  Part,
  PhotoItem
} from './styled';

interface Props {
  id?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ChangeYour = ({id, onClick}:Props): React.ReactElement => {
  const {t} = useTranslation()
  const [isAnimateStart, setAnimateStart] = React.useState(false);
  const [isState, setState] = React.useState(true)

  React.useEffect(() => {
    const interval = setInterval(() => {
      if(isState === true){
        setState(false)
      } else {
        setState(true)
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isState]);
  return (
   <Container id={id}>
      <SvgIcon>
        <Fade delay={1700}>
          <ICONS_MAP.Planet />
        </Fade>
      </SvgIcon>
      <PhotoWrapper>
        <PhotoItem isAnimationStart={isAnimateStart}>
          <Photo isAnimationStart={isAnimateStart} src={photo1} alt="photo1" />
        </PhotoItem>
        <PhotoItem isAnimationStart={isAnimateStart}>
          <Photo isAnimationStart={isAnimateStart} src={photo2} alt="photo2" />
        </PhotoItem>
      </PhotoWrapper>
      <StyledButton onClick={onClick} arrowLong>{t('main.change_your_life')}</StyledButton>
      <CustomTitle variant='h1'>
        <Fade onReveal={() => setAnimateStart(true)} duration={1000} bottom big cascade>{t('main.change_your')}</Fade>
        <PartTitle>
          <Part isState={isState}><Fade duration={1000} bottom big cascade>{t('main.monday')}</Fade></Part>
          <Part isState={isState}><Fade duration={1000} bottom big cascade>{t('main.job')}</Fade></Part>
      </PartTitle>
    </CustomTitle><Text><Fade delay={1700}>{t('main.we_are_boutique')}</Fade></Text>
    </Container>
  );
};

export default ChangeYour;
