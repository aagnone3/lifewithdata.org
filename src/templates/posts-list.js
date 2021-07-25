import React from 'react';
import { graphql } from 'gatsby';
import PostItem from '../components/PostItem';
import TitlePage from '../components/TitlePage';
import EmailSignupCTA from '../components/EmailSignupCTA';
import SEO from '../components/seo';

import Pagination from '../components/Pagination';

import * as S from '../components/ListWrapper/styled';

const Blog = props => {
  const postList = props.data.allMarkdownRemark.edges;

  // Logic for Pagination Component
  const { currentPage, numPages } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? '/blog' : `/blog/${currentPage - 1}`;
  const nextPage = `/blog/page/${currentPage + 1}`;

  return (
    <>
      <SEO title="Blog" />
      <TitlePage text="Blog" />

      <EmailSignupCTA />

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

      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </>
  );
};

export const query = graphql`
  query PostsList($dateFormat: String!, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}, 
      filter: { 
        fileAbsolutePath: {regex: "/(blog)\/.*\\.md$/"}
      }
      limit: $limit
      skip: $skip
    ){
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

export default Blog;
