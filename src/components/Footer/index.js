import React from 'react';

import SocialLinks from '../SocialLinks';
import EmailSignupCTA from '../EmailSignupCTA';
import * as S from './styled';

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterContainer>

        <S.SocialLinks>
          <S.DivHeader>Find Me Elsewhere</S.DivHeader>
          <SocialLinks />
        </S.SocialLinks>

        <S.SignupDiv>
          <EmailSignupCTA />
        </S.SignupDiv>

      </S.FooterContainer>
    </S.FooterWrapper>
  );
};

export default Footer;
