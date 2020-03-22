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
import GoOnOrGoBack from "../components/layout/GoOnOrGoBack"
// Containers
import RenderRichContent from "../components/containers/RenderRichContent"

const Talk = ({ data }) => {
  const { sanityTalk = {} } = data

  const {
    duration,
    time,
    title,
    sceneRef,
    lead,
    _rawDescription,
    foredragsholdere,
  } = sanityTalk

  return (
    <Layout>
      <StickyScreamingBuyButton></StickyScreamingBuyButton>
      {foredragsholdere.length === 1 && (
        <SpeakerHero
          person={foredragsholdere[0]}
          talktitle={true}
          title={title}
          course="Talk (NO)"
          details={true}
          time={findTalkDateAndTime(time, duration)}
          stage={sceneRef.title}
        />
      )}
      {/* <p className="text-huge">
        {time} + {duration}min
      </p>
      {sceneRef && <p className="text-huge">{sceneRef.title}</p>}
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
                  "
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
      <GoOnOrGoBack
        ForwardInTime="This years program"
        ForwardInTimeUrl="/program"
        BackInTime="Back to speakers"
        BackInTimeUrl="/speakers"
      ></GoOnOrGoBack>
    </Layout>
  )
}
export default Talk
export const query = graphql`
  query($id: String!) {
    sanityTalk(id: { eq: $id }) {
      title
      _rawDescription
      time
      lead
      duration
      sceneRef {
        title
      }
      foredragsholdere {
        image {
          asset {
            url
          }
        }
        slug {
          current
        }
        name
        shoutOut
        _rawBio
      }
    }
  }
`
