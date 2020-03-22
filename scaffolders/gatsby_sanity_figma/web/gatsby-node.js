
/*
  ========
  SPEAKERS
  ========

  Populate the Speakers ex /speaker/fjong-awesomness
  - fetch all speakers from sanity and create the pages
*/
async function createSpeakersPage(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPerson(filter: { slug: { current: { ne: null } } }) {
        nodes {
          id
          name
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
  const speakers = result.data.allSanityPerson.nodes || []
  speakers.forEach((node, index) => {
    const path = `/speaker/${node.slug.current}`
    createPage({
      path,
      component: require.resolve("./src/templates/speaker.js"),
      context: {
        id: node.id,
        slug: node.slug.current
      },
    })
  })
}

/*
  ========
  ARTICLES
  ========

  Populate the articles ex /article/about-y
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

/*
  =====
  TALKS
  =====

  Populate the talks ex /article/about-y
  - fetch all talks from sanity and create pages
*/
async function createTalksPage(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityTalk(filter: { slug: { current: { ne: null } } }) {
        nodes {
          id
          title
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
  const talks = result.data.allSanityTalk.nodes || []
  talks.forEach((node, index) => {
    const path = `/talk/${node.slug.current}`
    createPage({
      path,
      component: require.resolve("./src/templates/talk.js"),
      context: {
        id: node.id,
        slug: node.slug.current
      },
    })
  })
}


/*
  =========
  WORKSHOPS
  =========

  Populate the workshops ex /workshop/workshop-awesomness
  - fetch all workshops from sanity and create pages
*/
async function createWorkshopsPage(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityWorkshop(filter: { slug: { current: { ne: null } } }) {
        nodes {
          id
          title
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
  const workshops = result.data.allSanityWorkshop.nodes || []
  workshops.forEach((node, index) => {
    const path = `/workshop/${node.slug.current}`
    createPage({
      path,
      component: require.resolve("./src/templates/workshop.js"),
      context: {
        id: node.id,
        slug: node.slug.current
      },
    })
  })
}



exports.createPages = async ({ graphql, actions, reporter }) => {
  await createSpeakersPage(graphql, actions, reporter);
  await createArticlesPage(graphql, actions, reporter);
  await createTalksPage(graphql, actions, reporter);
  await createWorkshopsPage(graphql, actions, reporter);
};