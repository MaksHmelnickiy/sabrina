import React from 'react';
import Header from './Header';

import { ContentContainer } from './styled';

const MainPage = (): React.ReactElement => {
  return (
    <>
        <ContentContainer>
          <Header />
        </ContentContainer>
    </>
  );
};

export default MainPage;
