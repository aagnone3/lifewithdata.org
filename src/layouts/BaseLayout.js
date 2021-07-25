import React from 'react';
import GlobalStyles from '../styles/global';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Landing from '../components/Landing';

import * as S from './styled';

const BaseLayout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <S.Wrapper>
        <Header />
        {children.props.path === '/' && <Landing />}
        {/* {JSON.stringify(Object.keys(children.props))}
        {children.props.path} */}
        <S.SiteContent role="main">
          <S.Container>{children}</S.Container>
        </S.SiteContent>
        <Footer />
      </S.Wrapper>
    </>
  )
};

export { BaseLayout };
