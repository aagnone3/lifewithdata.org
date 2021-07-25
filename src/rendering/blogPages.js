const path = require(`path`);
const { getSlug } = require(`../utils/gatsby-node-helpers`);

exports.createBlogPages = async ({ graphql, actions}) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      files: allMarkdownRemark(
        filter: {
          frontmatter: {
            publicationType: {
              eq: "blog"
            }
          }
        },
        sort: {
          fields: [frontmatter___date],
          order: DESC
        }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    return;
  }

  // Creating each post
  const contentMarkdown = result.data.files.edges;
  contentMarkdown.forEach(({ node: file }) => {
    // Getting Slug and Title
    const slug = file.fields.slug;
    const title = file.frontmatter.title;

    console.log(`Creating page with slug ${getSlug({ slug, isPage: false })}`)
    createPage({
      path: getSlug({ slug, isPage: false }),
      component: path.resolve(`./src/templates/post.js`),
      context: {
        title,
      },
    });
  });

  // Creating Posts List and its Pagination
  const postsPerPage = 4;
  const numPages = Math.ceil(contentMarkdown.length / postsPerPage);

  return Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      path:
        index === 0
          ? `/blog`
          : `/blog/page/${index + 1}`,
      component: path.resolve(`./src/templates/posts-list.js`),
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numPages,
        currentPage: index + 1,
        dateFormat: `YYYY/MM/DD`
      },
    });
  });
}
