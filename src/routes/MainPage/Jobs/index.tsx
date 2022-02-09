import React from 'react';
import {useTranslation} from "react-i18next";

import { ICONS_MAP } from '../../../constants/icons';
import {
  Container, 
  Text,
  StyledButton,
  CustomTitle,
  Box,
  Description,
  BoxText,
  Image
} from './styled';

const Jobs = (): React.ReactElement => {
  const {t} = useTranslation()

  return (
    <>
      <Container>
        <CustomTitle variant='h2'>JOBS</CustomTitle>
        <Text>Dont see a job that suits you? Send us your CV and we will contact you to discuss your interests.</Text>

      </Container>
      {/* <Image>
        <StyledButton variant='tertiary' arrowDark>{t('contact.button')}</StyledButton>
      </Image> */}
    </>
  );
};

export default Jobs;
