import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

function getConfig() {
  // Query the JSON file in <rootDir>/config
  const { rawData } = useStaticQuery(query);

  if (rawData.edges.length != 1) {
    throw new Error(`Expected 1 config json from getConfig query, got ${rawData.edges.length}`)
  }

  return rawData.edges[0].node.config;
}

export default getConfig;

const query = graphql`
  query getConfig {
    rawData: allFile(
      filter: { sourceInstanceName: { eq: "config" } }
    ) {
      edges {
        node {
          name
          config: childConfigJson {
            home

            hello
            subline
            latestPosts
            category
            allPosts
            toRead

            next
            prev
            of

            button
          }
        }
      }
    }
  }
`;
