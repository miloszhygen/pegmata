import React from "react"
import { graphql } from "gatsby"
// Import components
import Layout from "../components/layout/Layout"

export default ({ data }) => {
  const { pages } = data;
  return (
    <Layout>
      Content here!
      <br/>
      <br/>
      Pages:
      {pages.edges.map(({node},i) => {
        const { path } = node;
          return (
            <div key={`${i + 1}_links`}>
              <a className="no-underline hover:underline text-blue-500" href={path}>{path}</a>
            </div>
          )}
        )}
    </Layout>
  )
}

export const query = graphql`
  query {
    pages: allSitePage {
      edges {
        node {
          path
          id
        }
      }
    }
  }
`
