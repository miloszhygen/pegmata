import React from "react"
import { graphql } from "gatsby"
// Layout
import Layout from "../components/layout/Layout"
import SpeakerHero from "../components/layout/SpeakerHero"
import StickyScreamingBuyButton from "../components/layout/StickyScreamingBuyButton"
import BuyTickets from "../components/layout/BuyTickets"
import GoOnOrGoBack from "../components/layout/GoOnOrGoBack"

// Containers
import RenderRichContent from "../components/containers/RenderRichContent"
// Primitives
import EventLink from "../components/primitives/EventLink"

const Speaker = props => {
  const { data } = props

  const content = data.sanityPerson._rawBio || []
  const { nodes: talksData } = data.allSanityTalk || []
  const { nodes: workshopsData } = data.allSanityWorkshop || []

  return (
    <Layout>
      <StickyScreamingBuyButton></StickyScreamingBuyButton>
      <div>
        <SpeakerHero person={data.sanityPerson}></SpeakerHero>
        {/* <div className="my-8 md:my-16 md:w-2/3 xl:w-1/2"> */}

        <div
          className="
          my-8 md:my-16
          max-w-sm
          m-auto"
        >
          {data.sanityPerson.shoutOut}
          <RenderRichContent content={content} />
        </div>

        {talksData.map(talk => (
          <EventLink content={talk} />
        ))}

        {workshopsData.map(workshop => (
          <EventLink content={workshop} />
        ))}
      </div>
      <BuyTickets></BuyTickets>
      <GoOnOrGoBack
        ForwardInTime="This years program"
        ForwardInTimeUrl="/program"
        BackInTime="Back to speakers"
        BackInTimeUrl="/speakers"
      ></GoOnOrGoBack>
    </Layout>
  )
}
export default Speaker
export const query = graphql`
  query($id: String!) {
    sanityPerson(id: { eq: $id }) {
      id
      name
      shoutOut
      stilling
      arbeidsgiver
      _rawBio
      image {
        asset {
          url
        }
      }
    }
    allSanityTalk(
      filter: { foredragsholdere: { elemMatch: { id: { eq: $id } } } }
    ) {
      nodes {
        title
        slug {
          current
        }
        _type
      }
    }
    allSanityWorkshop(
      filter: { foredragsholdere: { elemMatch: { id: { eq: $id } } } }
    ) {
      nodes {
        title
        slug {
          current
        }
        _type
      }
    }
  }
`
