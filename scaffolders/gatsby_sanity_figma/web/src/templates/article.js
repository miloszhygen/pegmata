import React from "react"
import Layout from "../components/layout/Layout"
import { graphql } from "gatsby"

// Containers
import RenderRichContent from "../components/containers/RenderRichContent"
// import Img from "gatsby-image"

const Article = ({ data }) => {
  const { sanityArticle = {} } = data

  const {
    title = "",
    lead,
    // longTitle,
    _rawContent,
  } = sanityArticle

  // const content = _rawContent  || [];

  return (
    <Layout>
      {/* <p className="text-huge">{data.sanityPerson.name}</p> */}
      <div
        className="
        flex flex-col
        md:flex-row
        "
      >
        <div
          className="
          bg-black
          order-2 md:order-1
          text-white
          p-4
          max-w-sm
          fit-content
          "
        >
          <h1 className="text-huge">{title}</h1>
        </div>
        {/* <img
          className="
            order-1 md:order-2
            object-cover
            h-48"
          src="https://scontent.fsvg1-1.fna.fbcdn.net/v/t1.0-9/71273075_2710470789016111_3315885404447571968_o.jpg?_nc_cat=102&_nc_ohc=FsfAasoRcsYAX-9NOdh&_nc_ht=scontent.fsvg1-1.fna&oh=e8ac15112931ad3aef471d23f4c03ed8&oe=5EB990BE"
          alt=""
        /> */}
      </div>

      <div
        className="
          my-8 md:my-16
          max-w-sm
          m-auto"
      >
        {lead}
      </div>
      {_rawContent.map((content, i) => (
        <RenderRichContent key={`${i}_content`} content={content} />
      ))}
    </Layout>
  )
}
export default Article

export const query = graphql`
  query($id: String!) {
    sanityArticle(id: { eq: $id }) {
      id
      title
      lead
      longTitle
      _rawContent
    }
  }
`
