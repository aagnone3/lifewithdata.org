module.exports = {
  siteMetadata: {
    title: `LifeWithData.org`,
    description: `TODO`,
    author: `Anthony Agnone`,
    siteUrl: `https://lifewithdata.org/`,
    keywords: [`Blog`, `Data`, `Science`, `Machine`, `Learning`, `Artificial`, `Intelligence`, `Software`, `Engineering`, `DevOps`, `MLOps`]
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // It needs to be the first one to work with gatsby-remark-images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/img`,
        name: `uploads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/config`,
        name: `config`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/newsletter`,
        name: `newsletter`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              // Optional:
    
              // the github handler whose gists are to be accessed
              username: "aagnone3",
    
              // a flag indicating whether the github default gist css should be included or not
              // default: true
              gistDefaultCssInclude: true,
    
              // a flag indicating whether the github default gist css should be preloaded or not
              // use this if you want to load the default css asynchronously.
              // default: false
              gistCssPreload: true || false,
    
              // a string that represents the github default gist css url.
              // defaults: "https://github.githubassets.com/assets/gist-embed-b3b573358bfc66d89e1e95dbf8319c09.css"
              gistCssUrlAddress: "https://github.githubassets.com/assets/gist-embed-b3b573358bfc66d89e1e95dbf8319c09.css"
            }
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank"
            }
          },
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: `uploads`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1040,
              showCaptions: true,
              markdownCaptions: true,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: videoId =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
              containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
            },
          },
          `gatsby-remark-gifs`,
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-check-links`,
          `gatsby-remark-lazy-load`,
          `gatsby-plugin-netlify`,
          `gatsby-plugin-meta-redirect`,  // It wanted to be the last one :)
          `gatsby-remark-prismjs`, // It needs to be the last one
        ],
      },
    },

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby multiple language`,
        short_name: `Gatsby multiple language`,
        start_url: `/`,
        background_color: `#16202c`,
        theme_color: `#16202c`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
