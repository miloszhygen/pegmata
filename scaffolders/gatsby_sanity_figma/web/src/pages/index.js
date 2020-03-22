import React from "react"
import { graphql } from "gatsby"
// Import components
import Layout from "../components/layout/Layout"
import GoOnOrGoBack from "../components/layout/GoOnOrGoBack"
import DemonstrationSigns from "../components/layout/DemonstrationSigns"
import MorePersonality from "../components/layout/MorePersonality"
import BuyTickets from "../components/layout/BuyTickets"
import RenderRichContent from "../components/containers/RenderRichContent"

export default ({ data }) => {
  const { _rawContent } = data.sanityPages

  return (
    <Layout>
      <h1 className="
        pt-8
        mb-8 xl:mb-0
        text-massive text-center
      ">Less</h1>

      <DemonstrationSigns></DemonstrationSigns>
      <RenderRichContent content={_rawContent} />
      <BuyTickets></BuyTickets>
      <GoOnOrGoBack
        ForwardInTime="2020 program"
        ForwardInTimeUrl="/program"
        BackInTime="Speakers 2019"
        BackInTimeUrl="/y-2019"
      ></GoOnOrGoBack>
      <MorePersonality></MorePersonality>
      
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
