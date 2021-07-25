import React from 'react';
import getConfig from '../getConfig';
import Navigation from '../Navigation';
import ButtonMenu from '../ButtonMenu';
import Logo from '../Logo';

import { useMenu } from '../../hooks/menu';

import * as S from './styled';

const Header = () => {
  const { home } = getConfig();
  const { openedMenu, toggleMenu } = useMenu();

  return (
    <S.HeaderWrapper>
      <S.Container>
        
        <S.LogoLink to="/" title={home} aria-label={home}>
          <Logo />
        </S.LogoLink>

        <S.ButtonMenu className={openedMenu ? 'is-active' : ''}>
          <ButtonMenu handleClick={toggleMenu} isActive={openedMenu} />
        </S.ButtonMenu>

        <S.NavMenu className={openedMenu ? 'is-active' : ''}>
          <Navigation />
        </S.NavMenu>
      </S.Container>
    </S.HeaderWrapper>
  );
};

export default Header;
