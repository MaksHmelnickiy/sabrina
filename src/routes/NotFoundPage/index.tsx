import React from 'react';
import { ICONS_MAP } from '../../constants/icons';
import {useTranslation} from "react-i18next";
import { Container, Box, StyledButton } from './styled';
import { Link } from 'react-router-dom';

interface ILogo {
  className?: string
}

const NotFoundPage = ({className}:ILogo): React.ReactElement => {
  const {t} = useTranslation()
  return (
    <Container className={className}>
      <Box>
        <ICONS_MAP.NotFound />
        <Link to='/'>
          <StyledButton arrowLong>{t('main.change_your_life')}</StyledButton>
        </Link>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
