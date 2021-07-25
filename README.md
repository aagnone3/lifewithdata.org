[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/diogorodrigues/iceberg-gatsby-multilang) 

<img src="./src/images/logo-iceberg.svg" width="150">

# Gatsby multi-language starter with CMS

[Demo on Netlify](https://iceberg-gatsby-multilang.netlify.com/)

[Starter on Gatsby](https://www.gatsbyjs.org/starters/diogorodrigues/iceberg-gatsby-multilang/)

A starter Internationalization / i18n without third party plugins or packages for Posts and Pages. Different URLs dependending on the language. Focused on SEO, PWA, Image Optimization, Styled Components and more. This starter is also integrate with Netlify CMS to manage all pages, posts and images.

-   Content in markdown for pages and posts in different languages
-   Netlify CMS to manage all pages, posts and images
-   Styled Components to styles
-   All important seetings for speedy and optimized images
-   Blog Posts list with pagination
-   Focus on SEO
-   PWA

## 🚀 Getting Started

Assuming [Gatsby](https://github.com/gatsbyjs/gatsby/) is installed, run the following commands to install the project:

**With gatsby-cli**:
```
$ gatsby new gatsby-multilanguage-site https://github.com/diogorodrigues/iceberg-gatsby-multilang.git
```

**With git clone**:
```
$ git clone https://github.com/diogorodrigues/iceberg-gatsby-multilang.git your-project-name # Clone the project

cd your-project-name

rm -rf .git
yarn install # or npm install
gatsby develop # or yarn run develop
```


Running `gatsby develop` you will see the following URLs:

```
http://localhost:8000
http://localhost:8000/___graphql
http://localhost:8000/admin
```

1. **blog and pages directories**:
   All markdown files to generate pages and posts.

2. **config**:
   All language settings: languages, strings, menu...
   In `i18n.js` you can set the languages and some others important info

3. **src**:
   Components, hooks, templates and fixed pages

4. **static**:
   Netlify settings and images.

5. **gatsby-browser.js**:
   External files and the layout wrapper setting.

6. **gatsby-config.js**:
   Gatsby plugins.

7. **gatsby-node.js**:
   Logic for generating pages and posts by manipulating GraphQL.

## About Netlify CMS

You must change the Netlify data "repo" and "site_domain" according your Github repository in `static/admin/config.yml`.

```
backend:
    name: github # Local
    # name: git-gateway # Prod
    repo: _owner-name/repo-name_ # Path to your GitHub repository
    branch: master
    site_domain: _site-url_ # If site extists
```

Realize that you need to use `name: github` for local development and `name: git-gateway` for prod environment (netlify)

## Important notes:

-   General information for languages are defined in `config/i18n.js`.
-   Due to the use of a global layout / context API and the language code passed to all pages (see `gatsby-node.js`), you know on all pages which language is currently displayed.
-   Blogposts are defined in `blog` directory and pages are defined in `pages` directory. The file names are the `slug` of the posts and pages.
-   A custom component for the <a> tag is implemented - this way links can stay the same for every language, without the need to manually write path prefixes.

## Deploy
TODO
