import React from 'react';
import useMenu from '../useMenu';

import * as S from './styled';

const Navigation = ({ isActive, handleToggleMenu }) => {
  const menuItems = useMenu();

  return (
    <>
      <S.Navigation>
        {menuItems.map((item, index) => (
          <S.NavigationLink
            to={item.link}
            aria-label={item.name}
            target={item.isExternalLink ? '_blank' : ''}
            activeClassName="active"
            key={`${item.link}${index}`}
            >
            {item.name}
          </S.NavigationLink>
        ))}
      </S.Navigation>
    </>
  );
};

export default Navigation;
