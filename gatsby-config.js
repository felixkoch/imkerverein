const { BLOCKS, MARKS, INLINES } = require('@contentful/rich-text-types')


let activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `Freizeitimker Wümme-Region e.V.`,
    description: `Imkerverein im Landkeis Rotenburg Wümme.`,
    author: `Freizeitimker Wümme-Region e.V.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ff4433`,
        theme_color: `#ff4433`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `d4jgu6t6omnl`,
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
      
    },

    {
      resolve: '@contentful/gatsby-transformer-contentful-richtext',
      options: {
        renderOptions: {
          /*
           * Defines custom html string for each node type like heading, embedded entries etc..
           */
          renderNode: {
            // Example
            [INLINES.ASSET_HYPERLINK]: node => {
              return `<img class='custom-asset' src="${
                node.data.target.fields.file['en-US'].url
              }"/>`
            },
            
            [BLOCKS.EMBEDDED_ASSET]: node => {
              return `<img class='custom-asset' src="${
                node.data.target.fields.file['en-US'].url
              }"/>`
            },
            
            [INLINES.EMBEDDED_ENTRY]: node => {
              return `<div class='custom-entry' />${
                node.data.target.fields.name['en-US']
              }</div>`
            },

          
            ["paragraph"]: (node, next) => `<p>${next(node.content).replace(/\n/g, `</br>`)}</p>`

          },
        },
      },
    },



  ],
}
