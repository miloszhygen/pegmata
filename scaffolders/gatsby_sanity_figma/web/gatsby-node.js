
/*
  ========
  ARTICLES
  ========

  Populate the articles ex /article/slug
  - fetch all articles from sanity and create pages
*/
async function createArticlesPage(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityArticle(filter: { slug: { current: { ne: null } } }) {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }
  const articles = result.data.allSanityArticle.nodes || []
  articles.forEach((node, index) => {
    const path = `/${node.slug.current}`
    createPage({
      path,
      component: require.resolve("./src/templates/article.js"),
      context: {
        id: node.id,
        slug: node.slug.current
      },
    })
  })
}


exports.createPages = async ({ graphql, actions, reporter }) => {
  // await createArticlesPage(graphql, actions, reporter);
};