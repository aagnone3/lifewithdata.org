import styled from 'styled-components';
import { Twitter } from 'styled-icons/boxicons-logos/Twitter';
import { MediumSquare } from 'styled-icons/boxicons-logos/MediumSquare';
import { LinkedinSquare } from 'styled-icons/boxicons-logos/LinkedinSquare';
import { Github } from 'styled-icons/boxicons-logos/Github';
import { Reddit } from 'styled-icons/boxicons-logos/Reddit';
import { FacebookSquare } from 'styled-icons/boxicons-logos/FacebookSquare';

export const SocialLinksContainer = styled.div`
  text-align: center;
`

export const SocialLinksList = styled.ul`
  display: inline-block;
`;

export const SocialLinksItem = styled.li`
  display: inline-block;
  margin-right: 1.5rem;
`;

export const SocialLinksLink = styled.a`
  display: block;
  width: 50px;
  color: var(--primary-color);
`;

export const IconGithub = styled(Github)`
  color: black;
`

export const IconMediumSquare = styled(MediumSquare)`
  color: black;
`

export const IconLinkedinSquare = styled(LinkedinSquare)`
  color: #2867b2;
`

export const IconTwitter = styled(Twitter)`
  color: #4DABF7;
`

export const IconReddit = styled(Reddit)`
  color: #FF4500;
`

export const IconFacebookSquare = styled(FacebookSquare)`
  color: #046EE5;
`
