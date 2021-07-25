import React from 'react';

import * as S from './styled';

const SocialLinks = () => {
  return (
    <S.SocialLinksContainer>
      <S.SocialLinksList>

        <S.SocialLinksItem>
          <S.SocialLinksLink
            href="https://twitter.com/anthonyagnone"
            title="Twitter"
            rel="noopener noreferrer"
            target="_blank"
          >
            <S.IconTwitter />
          </S.SocialLinksLink>
        </S.SocialLinksItem>

        <S.SocialLinksItem>
          <S.SocialLinksLink
            href="https://anthonyagnone.medium.com"
            title="Medium"
            rel="noopener noreferrer"
            target="_blank"
          >
            <S.IconMediumSquare />
          </S.SocialLinksLink>
        </S.SocialLinksItem>

        <S.SocialLinksItem>
          <S.SocialLinksLink
            href="https://linkedin.com/in/anthonyagnone"
            title="Github"
            rel="noopener noreferrer"
            target="_blank"
          >
            <S.IconLinkedinSquare />
          </S.SocialLinksLink>
        </S.SocialLinksItem>

        <S.SocialLinksItem>
          <S.SocialLinksLink
            href="https://github.com/aagnone3"
            title="Github"
            rel="noopener noreferrer"
            target="_blank"
          >
            <S.IconGithub />
          </S.SocialLinksLink>
        </S.SocialLinksItem>

        <S.SocialLinksItem>
          <S.SocialLinksLink
            href="https://reddit.com/aagnone3"
            title="Reddit"
            rel="noopener noreferrer"
            target="_blank"
          >
            <S.IconReddit />
          </S.SocialLinksLink>
        </S.SocialLinksItem>

        <S.SocialLinksItem>
          <S.SocialLinksLink
            href="https://facebook.com/aLifeWithData"
            title="Facebook"
            rel="noopener noreferrer"
            target="_blank"
          >
            <S.IconFacebookSquare />
          </S.SocialLinksLink>
        </S.SocialLinksItem>

      </S.SocialLinksList>
    </S.SocialLinksContainer>
  );
};

export default SocialLinks;
