import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
// Layout
import Layout from "../components/layout/Layout"
import Accordion from "../components/layout/Accordion"
import BuyTickets from "../components/layout/BuyTickets"
// Primitives
import ProgramWednesday from "../components/primitives/ProgramWednesday"
import ProgramThursday from "../components/primitives/ProgramThursday"
import ProgramFriday from "../components/primitives/ProgramFriday"

export default ({ data }) => {
  // const { nodes: programData = [] } = data.allSanityProgram
  const { pageTitle, shoutOut } = data.sanityPages

  return (
    <Layout>
      <div>
        <div
          className="
            flex justify-between items-center
            flex-col md:flex-row
            bg-black text-white
            w-full
            py-8 px-4
            mb-2
            "
        >
          <h1 className="text-huge w-full md:w-1/4">{pageTitle}</h1>

          {shoutOut && (
            <div
              className="
            transform rotate-4
            bg-white text-black
            border border-black
            max-w-xs
            -mb-16
            p-4
            "
            >
              <p className="netlife-sans">{shoutOut}</p>
            </div>
          )}
        </div>

        <Link to={`/speakers`}>
          <div
            className="
              flex justify-between
              bg-white text-black
              border border-w-4 hover:border-green
              w-full p-4 mb-2
              hover:bg-green hover:text-black"
          >
            <h1 className="text-huge uppercase">Speakers</h1>
            <h1 className="text-huge">→</h1>
          </div>
        </Link>
        <Accordion>
          <div data-header="Wednesday" className="mb-2">
            <ProgramWednesday></ProgramWednesday>
          </div>
          <div data-header="Thursday" className="mb-2">
            <ProgramThursday></ProgramThursday>
          </div>
          <div data-header="Friday" className="mb-2">
            <ProgramFriday></ProgramFriday>
          </div>
        </Accordion>
        <BuyTickets></BuyTickets>
        <div className="mb-24 mt-24 uppercase text-center">
          LATE TO THE PARTY?
          <br />
          <Link className="underline hover:text-green" to={`/speakers`}>
            check out last years talks here
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    sanityPages(slug: { current: { eq: "program" } }) {
      id
      pageTitle
      shoutOut
    }
    allSanityProgram {
      nodes {
        id
        programArray {
          _key
          _type
          postTitle
          slotRef {
            _key
            _type
            ref {
              ... on SanityTalk {
                id
                title
                slug {
                  current
                }
                duration
                foredragsholdere {
                  name
                  stilling
                  slug {
                    current
                  }
                }
                sceneRef {
                  title
                }
              }
              ... on SanityWorkshop {
                id
                title
                slug {
                  current
                }
                duration
                foredragsholdere {
                  name
                  stilling
                  slug {
                    current
                  }
                }
                sceneRef {
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`
