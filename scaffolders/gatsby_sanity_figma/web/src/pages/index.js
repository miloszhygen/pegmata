import React from "react"
import { graphql } from "gatsby"
// Import components
import Layout from "../components/layout/Layout"

export default ({ data }) => {
  const { _rawContent } = data.sanityPages

  return (
    <Layout>
      content here!
    </Layout>
  )
}

export const query = graphql`
  query {
    sanityPages(slug: { current: { eq: "index" } }) {
      id
      pageTitle
      _rawContent(resolveReferences: { maxDepth: 5 })
    }
  }
`
