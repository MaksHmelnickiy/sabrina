import React from 'react';
import { ICONS_MAP } from '../../constants/icons';
import { Container, Wrapper, Button, Text, Policy, Flex } from './styled';
import {useTranslation} from "react-i18next";

interface ICookie {
  isShow: boolean;
  setShow: React.MouseEventHandler<HTMLButtonElement>;
  onClickPolicy: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Cookie = ({isShow, setShow, className, onClickPolicy}: ICookie) => {
  const {t} = useTranslation();
  return (
    <>
      {isShow &&
        <Container className={className}>
          <Wrapper>
            <Flex>
              <ICONS_MAP.Cookie />
              <Text>
                {t('cookies.text')}
                <Policy onClick={onClickPolicy}>{t('cookies.link')}</Policy>
              </Text>
            </Flex>
            <Button onClick={setShow}>{t('cookies.button')}</Button>
          </Wrapper>
        </Container>
      }
    </>
  );
};
export default Cookie;