require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.js
    siteTitle: `Martin Guillemet`,
    siteTitleAlt: `Martin Guillemet · Portfolio`,
    siteHeadline: `Martin Guillemet · Compositing & Motion Design`,
    siteUrl: `http://martin.guillemet.org`,
    siteDescription: `Martin Guillemet travaille actuellement sur son projet de diplôme à l'école Estienne (2022)`,
    siteLanguage: `fr`,
    siteImage: `/banner.png`,
    author: `Martin Guillemet`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Martin Guillemet · Portfolio`,
        short_name: `Martin Guillemet`,
        description: `Martin Guillemet travaille actuellement sur son projet de diplôme à l'école Estienne (2022)`,
        start_url: `/`,
        background_color: `#141821`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/favicon.svg`,
            type: `image/svg+xml`,
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
