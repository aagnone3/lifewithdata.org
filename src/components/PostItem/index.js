import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styled';

const PostItem = ({
  slug,
  date,
  timeToRead,
  title,
  description,
  image,
}) => {
  const { listImages } = useStaticQuery(
    graphql`
      query {
        listImages: allFile(filter: {ext: { in: [".png", ".jpg"]}}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 350) {
                  src
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `,
  );

  const postImgCover = listImages.edges.find(img => {
    return img.node.childImageSharp.fluid.src.includes('cover');
  });

  const imgName = image ? image.split('/')[3] : false;

  const postImg = imgName
    ? listImages.edges.find(img => {
        return img.node.childImageSharp.fluid.src.includes(imgName);
      })
    : false;

  return (
    <S.PostItemLink to={slug}>
      <S.PostItemWrapper>
        {postImg && (
          <S.PostItemImg
            fluid={postImg.node.childImageSharp.fluid}
            alt={title}
          />
        )}
        {!postImg && (
          <S.PostItemImg
            fluid={postImgCover.node.childImageSharp.fluid}
            alt={title}
          />
        )}

        <S.PostItemInfo>
          <S.PostItemDate>
            {date} • {timeToRead} min to read
          </S.PostItemDate>
          <S.PostItemTitle>{title}</S.PostItemTitle>
          <S.PostItemDescription>{description}</S.PostItemDescription>
        </S.PostItemInfo>
      </S.PostItemWrapper>
    </S.PostItemLink>
  );
};

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PostItem;
