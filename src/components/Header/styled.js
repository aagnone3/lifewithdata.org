import { Link } from 'gatsby';
import styled from 'styled-components';
import media from 'styled-media-query';

export const HeaderWrapper = styled.div`
  /* background-image: linear-gradient(white, grey); */
  background-image: linear-gradient(grey, white);
  ${media.greaterThan('large')`
    margin-bottom: var(--space);
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: var(--width-container);
  margin: 0 auto;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
`;

export const LogoLink = styled(Link)`
  display: inline-block;
  margin-right: 0.5rem;
  width: 170px;
`;

export const ButtonMenu = styled.div`
  &.is-active {}
`;

export const NavMenu = styled.div`
  width: 100%;
  display: none;
  ${media.greaterThan('medium')`
    margin-left: auto;
    width: auto;
    display: block;
  `}
  &.is-active {
    display: block;
  }
`;
