import styled from 'styled-components';
import media from 'styled-media-query';

export const FooterWrapper = styled.div`
  margin-top: 3rem;
  margin-left: auto;
  width: 100%;
  /* background-color: rgba(0, 0, 0, 0.1); */
  background-image: linear-gradient(grey, white);
`;

export const FooterContainer = styled.div`
  max-width: var(--width-container);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: calc(var(--space) * 1.3) var(--space);
  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
  /* ${media.greaterThan('large')`
    padding: calc(var(--space)*1.3) var(--space-sm);
  `} */
`;

export const DivHeader = styled.h2`
  margin-bottom: 2.5rem;
`

export const SocialLinks = styled.div`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin: 3rem 0;
  min-width: 50%;
`

export const SignupDiv = styled.h2`
`
