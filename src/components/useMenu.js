import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

function useMenu() {
  const { rawData } = useStaticQuery(query);
  if (rawData.edges.length != 1) {
    throw new Error(`Expected 1 config json from getConfig query, got ${rawData.edges.length}`)
  }

  return rawData.edges[0].node.config.menuItems;
}

export default useMenu;

const query = graphql`
  query useMenu {
    rawData: allFile(filter: { sourceInstanceName: { eq: "config" } }) {
      edges {
        node {
          name
          config: childConfigJson {
            menuItems {
              link
              name
              isExternalLink
            }
          }
        }
      }
    }
  }
`;
