import React from "react"
import Layout from "../components/layout/Layout"
import { graphql } from "gatsby"

const Article = ({ data }) => {
  const { sanityArticle = {} } = data

  const {
    title = '',
    content = ''
  } = sanityArticle

  return (
    <Layout>
      <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
        <p className="font-bold">{title}</p>
        <p className="text-sm">{content}</p>
      </div>
    </Layout>
  )
}
export default Article

export const query = graphql`
  query($id: String!) {
    sanityArticle(id: { eq: $id }) {
      id
      title
      content
    }
  }
`
