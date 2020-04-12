/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const { api, env } = require('./../sanity/sanity.json');

const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'develop';
const projectId = api.projectId;
const sanityDataset = activeEnv === 'production' ? api.dataset : env.development.api.dataset;


console.log('Using dataset:', sanityDataset)


module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId,
        dataset: sanityDataset,
        // token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: false, // dont do this
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true, // Enable tailwindcss support
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    }
  ],
}