import React from 'react';
import { ICONS_MAP } from '../../constants/icons';
import {useTranslation} from "react-i18next";
import { Container, Text, Box, StyledButton } from './styled';

interface ILogo {
  className?: string
}

const NotFoundPage = ({className}:ILogo): React.ReactElement => {
  const {t} = useTranslation()
  return (
    <Container className={className}>
      <Box>
        <ICONS_MAP.NotFound />
        <StyledButton arrowLong>{t('main.change_your_life')}</StyledButton>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
