import React from 'react';
import { Link } from 'gatsby';

import Logo from '../Logo';
import getConfig from '../getConfig';
import SocialLinks from '../SocialLinks'
import EmailSignupCTA from '../EmailSignupCTA'
import SignupForm from '../SignupForm'
import * as S from './styled'

const render = () => {
    const { home } = getConfig();
    return (
        <S.Container>

            <S.LogoDiv>
                <Link to="/" title={home} aria-label={home}>
                    <Logo />
                </Link>
            </S.LogoDiv>
            
            <S.LandingForeground>
                <SocialLinks />
                <S.EmailSignupDiv>
                    <EmailSignupCTA />
                </S.EmailSignupDiv>
            </S.LandingForeground>

        </S.Container>
    )
}

export default render;