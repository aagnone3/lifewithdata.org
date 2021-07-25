const path = require(`path`);
const {
  removeTrailingSlash,
  fileHasDatePrefix
} = require(`./src/utils/gatsby-node-helpers`);
const { createNewsletterPages } = require('./src/rendering/newsletterPages')
const { createBlogPages } = require('./src/rendering/blogPages')

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  // First delete the incoming page that was automatically created by Gatsby
  // So everything in src/pages/
  deletePage(page);

  return createPage({
    // Pass on everything from the original page
    ...page,
    // Remove the trailing slash that page.path returns
    path: removeTrailingSlash(page.path),
    // This context also gets passed to the src/components/layout file
    context: {
      ...page.context,
      dateFormat: `YYYY/MM/DD`
    },
  });
}

// Correcting language and slug to the frontmatter of each file
// A new node is created automatically with the filename
// It's necessary to do that to filter by language
// And the slug make sure the urls will be the same for all posts
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  // Check for "MarkdownRemark" type so that other files (e.g. images) are excluded
  if (node.internal.type === `MarkdownRemark`) {
    const slugFileName = path.basename(node.fileAbsolutePath, `.md`);

    // Than remove the date if the name has a date prefix
    const slug =
      fileHasDatePrefix(slugFileName)
        ? slugFileName.slice(11)
        : slugFileName;

    // Adding the nodes on GraphQL for each post as "fields"
    createNodeField({ node, name: `slug`, value: slug });
  }
};

// Creating Posts and Pages for each node in AllMarkdownRemark
exports.createPages = async ({ graphql, actions }) => {
  await createBlogPages({ graphql, actions});
  await createNewsletterPages({ graphql, actions});
};
