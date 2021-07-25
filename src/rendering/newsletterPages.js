const path = require(`path`);
const fs = require('fs');
const yaml = require('js-yaml')

exports.createNewsletterPages = async ({ graphql, actions}) => {
  const { createPage } = actions;
  const result = await graphql(`
    query NewsletterMLUpToDate {
      allFile(filter: {
          base: {glob: "*machine-learning-up-to-date-*.yaml"},
          relativeDirectory: {eq: "raw"}
        },
        sort: {fields: base, order: DESC}
      ) {
        nodes {
          base
          absolutePath
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    return;
  }

  // Creating each post
  const files = result.data.allFile.nodes
  let contentList = []
  files.forEach((file) => {
    const content = yaml.load(fs.readFileSync(file.absolutePath, { encoding: 'utf-8' }))
    content.slug = `mlutd${content.article_num}`
    content.description = `#${content.article_num} of the weekly newsletter from lifewithdata.org`
    content.title = `Machine Learning Up to Date #${content.article_num}`
    console.log(`Creating newsletter page with slug /newsletter/${content.slug}`)
    createPage({
      path: `/newsletter/${content.slug}`,
      component: path.resolve(`./src/templates/newsletter-machine-learning-up-to-date.js`),
      context: {
        content,
        imagesGlob: `*${content.slug}*`
      },
    });
    contentList.push(content)
  });

  // Creating Posts List and its Pagination
  const postsPerPage = 4;
  const numPages = Math.ceil(files.length / postsPerPage);

  return Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      path:
        index === 0
          ? `/newsletter`
          : `/newsletter/page/${index + 1}`,
      component: path.resolve(`./src/templates/newsletter-machine-learning-up-to-date-list.js`),
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        contentList: contentList,
        numPages,
        currentPage: index + 1,
        dateFormat: `YYYY/MM/DD`
      },
    });
  });
}
