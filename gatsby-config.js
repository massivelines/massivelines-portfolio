module.exports = {
  siteMetadata: {
    title: `Shawn Rhodes`,
    description: `Shawn Rhodes - Front End Developer & Web Designer`,
    author: `@massivelines`,
  },
  plugins: [
    // 'gatsby-plugin-svgr',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        // path: `${__dirname}/src/content/assets`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/content/projects`,
    //     name: `projects`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shawn Rhodes`,
        short_name: `Shawn Rhodes`,
        start_url: `/`,
        background_color: `#b8312d`,
        theme_color: `#b8312d`,
        display: `minimal-ui`,
        // icon: `src/content/assets/code-regular.png`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           maxWidth: 768,
    //         },
    //       },
    //       `gatsby-remark-copy-linked-files`,
    //       `gatsby-remark-smartypants`,
    //       'gatsby-remark-component',
    //     ],
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `UA-114418107-1`,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
