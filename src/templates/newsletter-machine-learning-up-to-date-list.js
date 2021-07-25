import React from 'react';
// import { graphql } from 'gatsby';

import PostItem from '../components/PostItem';
import TitlePage from '../components/TitlePage';
import SEO from '../components/seo';
import EmailSignupCTA from '../components/EmailSignupCTA';
import Pagination from '../components/Pagination';
import * as S from '../components/ListWrapper/styled';

const Newsletter = props => {
  const contentList = props.pageContext.contentList;

  // Logic for Pagination Component
  const { currentPage, numPages } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? '/newsletter' : `/newsletter/${currentPage - 1}`;
  const nextPage = `/newsletter/page/${currentPage + 1}`;

  return (
    <>
      <SEO title="Newsletter" />
      <TitlePage text="Newsletter" />

      <EmailSignupCTA />

      <S.ListWrapper>
        {contentList.map(content => {
            return (
              <PostItem
                slug={`/newsletter/${content.slug}`}
                date={content.date}
                timeToRead={5}
                title={content.title}
                description={content.description}
                image={content.articles.filter(a => a.featured)[0].image}
                key={content.slug}
              />
            )
          }
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

// export const query = graphql`
//   query NewsletterMLUpToDateList($skip: Int!, $limit: Int!) {
//     allFile(filter: {
//         base: {glob: "????-??-??-machine-learning-up-to-date-*.yaml"},
//         relativeDirectory: {eq: "raw"}
//       }
//       limit: $limit
//       skip: $skip
//     ) {
//       nodes {
//         base
//         absolutePath
//       }
//     }
//   }
// `;
// export const query = graphql`
//   query NewsletterMLUpToDateList($dateFormat: String!, $skip: Int!, $limit: Int!) {
//     allMarkdownRemark(
//       sort: {fields: frontmatter___date, order: DESC},
//       filter: { 
//         fileAbsolutePath: {regex: "/(newsletter)\/.*\\.md$/"}
//       }
//       limit: $limit
//       skip: $skip
//     ){
//       edges {
//         node {
//           frontmatter {
//             title
//             description
//             image
//             date(formatString: $dateFormat)

//           }
//           timeToRead
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
// `;

export default Newsletter;
