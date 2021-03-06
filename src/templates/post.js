import React from 'react';
import { graphql } from 'gatsby';
import TitlePage from '../components/TitlePage';
import SEO from '../components/seo';

import * as S from '../components/Content/styled';

const Post = props => {
  const post = props.data.markdownRemark;

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      <TitlePage text={post.frontmatter.title} />
      <S.Content>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.Content>
    </>
  );
};

export const query = graphql`
  query Post($title: String!) {
    markdownRemark(
      frontmatter: { title: { eq: $title } }
    ) {
      frontmatter {
        title
        description
        image
      }
      html
    }
  }
`;

export default Post;
