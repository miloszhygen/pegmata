import React from "react"
import { graphql, Link } from "gatsby"
// Import components
import Layout from "../components/layout/Layout"

export default ({ data }) => {
  const { nodes: sanityPersons = [] } = data.allSanityPerson
  const { pageTitle, shoutOut } = data.sanityPages

  return (
    <Layout>
      {/*
      This is how it will be when all speakers are confirmed
      <div
        className="
        flex justify-between
        bg-green
        w-full
        p-4
        hover:bg-black hover:text-green"
      >
        <h1 className="text-huge">Speakers 2020</h1>
        <h1 className="text-huge">↓↓↓</h1>
      </div> */}
      <div
        className="
        bg-green
        w-full
        p-4
        relative
        "
      >
        <h3 className="text-huge uppercase w-1">{pageTitle}</h3>
        {shoutOut && (
          <div
            className="
            transform rotate-4
            bg-black text-white
            max-w-xs
            p-4
            relative md:absolute
            top-0
            mt-8
            mr-8
            right-0
            "
          >
            <p className="netlife-sans">{shoutOut}</p>
          </div>
        )}
      </div>
      {sanityPersons.map((person, i) => {
        return (
          <div key={`speaker_${i}`}>
            <Link
              className="
              flex items-center
              flex-col md:flex-row
              border-b border-8 border-black
              w-full
              hover:text-green
              py-4
              speaker
              "
              to={`/speaker/${person.slug.current}`}
            >
              <img
                className="
                flex-grow-0
                object-cover
                w-full md:w-32
                h-48 md:h-24
                pr-0 md:pr-4
                "
                src={person.image ? person.image.asset.url : ""}
                alt={person.name}
              />
              <span
                className="
                flex-grow
                w-full
                mt-4 md:mt-0"
              >
                <h1
                  className="
                text-xl
                "
                >
                  {person.name}
                </h1>
                <p>
                  {person.stilling}, {person.arbeidsgiver}
                </p>
              </span>

              <h1
                className="
                text-huge
                flex-grow-0
                hidden md:flex"
              >
                →
              </h1>
            </Link>
          </div>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    sanityPages(slug: { current: { eq: "speakers" } }) {
      pageTitle
      shoutOut
    }
    allSanityPerson {
      nodes {
        id
        name
        stilling
        arbeidsgiver
        slug {
          current
        }
        image {
          asset {
            url
          }
        }
      }
    }
  }
`
