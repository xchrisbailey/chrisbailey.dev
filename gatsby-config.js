module.exports = {
  siteMetadata: {
    title: `chris bailey (dev)`,
    description: `Personal developer blog, follow along with my learning journey`,
    author: `@chrisbailey`,
    siteUrl: 'https://chrisbailey.dev',
    lang: 'en',
  },
  plugins: [
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-next-seo`,
      options: {
        twitter: {
          handle: '@chrisbailey',
          site: '@chrisbailey',
          cardType: 'summary',
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`noto sans`, `bree serif`, `fira code`],
        display: 'swap',
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              // theme: `SynthWave '84`,
              theme: 'Night Owl',
              extensions: ['synthwave-vscode', 'night-owl'],
              injectStyles: true,
              inlineCode: {
                marker: '•',
              },
            },
          },
          { resolve: `gatsby-remark-external-links` },
          { resolve: `gatsby-remark-smartypants` },
        ],
        defaultLayouts: {
          posts: require.resolve('./src/templates/post.jsx'),
          default: require.resolve('./src/components/Layout.jsx'),
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `chris bailey (dev)`,
        short_name: `cbd`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/rocket-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-loadable-components-ssr`,
      options: {
        // Whether replaceHydrateFunction should call ReactDOM.hydrate or ReactDOM.render
        // Defaults to ReactDOM.render on develop and ReactDOM.hydrate on build
        useHydrate: true,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
