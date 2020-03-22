import React from "react"
import { graphql, Link } from "gatsby"
// Import components
import Layout from "../components/layout/Layout"

export default ({ data }) => {
  const { nodes: workshops = [] } = data.allSanityWorkshop
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
              flex justify-between items-center
              bg-green
              w-full
              py-8 px-4
              mb-2
              "
      >
        <h1 className="text-xl w-1/4">{pageTitle}</h1>

        {shoutOut && (
          <div
            className="
              transform rotate-4
              bg-white text-black
              max-w-xs
              -mb-16
              p-4
              "
          >
            <p>{shoutOut}</p>
          </div>
        )}
      </div>

      {/* <div
        className="
        bg-green
        w-full
        p-4
        relative
        "
      >

        <h1 className="text-xl">Workshops</h1>
        {shoutOut &&
            <div
              className="
            transform rotate-4
            bg-white text-black
            max-w-xs
            -mb-16
            p-4
            "
            >
              <p>
                {shoutOut}
              </p>
            </div>
          }

      </div> */}
      {workshops.map((shop, i) => {
        return (
          <div key={`speaker_${i}`}>
            <Link
              className="
              flex items-center
              flex-col md:flex-row
              border-b border-8 border-black
              w-full
              p-4
              "
              to={`/workshop/${shop.slug.current}`}
            >
              <h1
                className="
                text-xl
                flex-grow
                mt-4 md:mt-0"
              >
                {shop.title}
              </h1>

              <h1 className="text-xl flex-grow-0">→</h1>
            </Link>
          </div>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    sanityPages(slug: { current: { eq: "workshops" } }) {
      id
      pageTitle
      shoutOut
    }
    allSanityWorkshop {
      nodes {
        title
        slug {
          current
        }
      }
    }
  }
`
