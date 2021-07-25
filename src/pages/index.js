import React from 'react';
import { graphql, Link } from 'gatsby';

import SEO from '../components/seo';
import PostItem from '../components/PostItem';
import * as S from '../components/ListWrapper/styled';

const Index = ({ data: { allMarkdownRemark } }) => {
  const postList = allMarkdownRemark.edges;

  return (
    <div className="homepage">
      <SEO title="Home" />

      <div style={{minHeight: '5rem'}} />

      <S.ListWrapper>
        {postList.map(
          ({
            node: {
              frontmatter: {
                date,
                description,
                title,
                image,
              },
              timeToRead,
              fields: { slug },
            },
          }) => (
              <PostItem
                slug={`/blog/${slug}`}
                date={date}
                timeToRead={timeToRead}
                title={title}
                description={description}
                image={image}
                key={slug}
              />
            ),
        )}
      </S.ListWrapper>

      <br />

      <Link to={`/blog/`}>See More</Link>
    </div>
  );
};

export default Index;

export const query = graphql`
  query Index($dateFormat: String!) {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/(blog)\/.*\\.md$/"}
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            image
            date(formatString: $dateFormat)

          }
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
`;
