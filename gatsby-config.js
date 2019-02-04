module.exports = {
  siteMetadata: {
    title: `Shawn Rhodes`,
    description: `Shawn Rhodes - Front End Developer & Web Designer`,
    author: `@massivelines`,
  },
  plugins: [
    'gatsby-plugin-ngrok-tunneling',
    'gatsby-plugin-svgr',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/content/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/projects`,
        name: `projects`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shawn Rhodes`,
        short_name: `Shawn Rhodes`,
        start_url: `/`,
        background_color: `#b8312d`,
        theme_color: `#b8312d`,
        display: `minimal-ui`,
        icon: `src/content/assets/code-regular.png`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 768,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          'gatsby-remark-component',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    // 'gatsby-plugin-offline',
  ],
};
