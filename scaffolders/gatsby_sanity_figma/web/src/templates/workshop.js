import React from "react"
import { graphql, Link } from "gatsby"
// IMport utils
import findTalkDateAndTime from "../utils/dateUtil"
// Layout
import Layout from "../components/layout/Layout"
import SpeakerHero from "../components/layout/SpeakerHero"
import Accordion from "../components/layout/Accordion"
import StickyScreamingBuyButton from "../components/layout/StickyScreamingBuyButton"
import BuyTickets from "../components/layout/BuyTickets"
//Containers
import RenderRichContent from "../components/containers/RenderRichContent"

const Workshop = ({ data }) => {
  const { sanityWorkshop = {} } = data

  // const { sanityWorkshop = {} } = data

  const {
    duration,
    time,
    lead,
    title,
    sceneRef,
    _rawDescription,
    foredragsholdere,
  } = sanityWorkshop

  return (
    <Layout>
      <StickyScreamingBuyButton></StickyScreamingBuyButton>
      {/* <p className="text-huge">{workshop.title}</p>
      <p>{JSON.stringify(workshop)}</p> */}
      <SpeakerHero
        person={foredragsholdere}
        talktitle={true}
        title={title}
        course="Talk (NO)"
        details={true}
        time={findTalkDateAndTime(time, duration)}
        stage={sceneRef.title}
      />
      {/* <p className="text-huge">
        {time} + {duration}min
      </p>
      <p className="text-huge">{sceneTitle}</p>
      <p className="text-huge">{title}</p> */}
      <div
        className="
          my-8 md:my-16
          max-w-sm
          m-auto"
      >
        {lead}
        <RenderRichContent content={_rawDescription} />
      </div>
      {/* SPEAKERS */}
      {foredragsholdere.map(({ name, _rawBio, image, shoutOut, slug }) => (
        <div className="flex max-w-xl mx-auto items-center mb-3">
          <div className="w-2/6">
            <img
              className="h-24 md:h-48 object-cover"
              src={image.asset.url}
              alt={name}
            />
          </div>
          <div className="w-4/6 ml-3">
            <Accordion
              color="green"
              text="black"
              hover="white"
              focus="black"
              arrowSize="xl"
              width="auto"
            >
              <div data-header-speaker={name}>
                <div
                  className="
                  bg-green
                  p-4 mt-3
                  max-w-sm
                  netlife-sans"
                >
                  <p className="netlife-sans">{shoutOut}</p>
                  <br />

                  <Link className="underline" to={`/speaker/${slug.current}`}>
                    Read more about {name}
                  </Link>
                </div>
              </div>
            </Accordion>
          </div>
        </div>
      ))}
      <BuyTickets></BuyTickets>
    </Layout>
  )
}
export default Workshop

export const query = graphql`
  query($id: String!) {
    sanityWorkshop(id: { eq: $id }) {
      id
      title
      lead
      _rawDescription
      duration
      time
      foredragsholdere {
        image {
          asset {
            url
          }
        }
        shoutOut
        slug {
          current
        }
        name
        _rawBio
      }
      sceneRef {
        title
        slug {
          current
        }
      }
      trackRef {
        title
      }
      full
      price
    }
  }
`
