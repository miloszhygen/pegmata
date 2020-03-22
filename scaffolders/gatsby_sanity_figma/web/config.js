
const inProduction = process.env.GATSBY_NODE_ENV === "production"

console.info(`Setting env to --> ${inProduction ? "PRODUCTION" : "DEVELOP"} `)

module.exports = {
  sanity: {
    projectId: "",
    dataset: inProduction ? "production" : "develop",
    // a token with read permissions is required
    // if you have a private dataset
    // token: process.env.MY_SANITY_TOKEN,
    watchMode: true, // Make it possible to see changes on Sanity on Gatsby without rebuilding the server
  }
}