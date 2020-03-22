/*
  To make checkin work you need to activate ssl when fireing up the app

  run `npm run dev -- --https`

  follow the instructions on https://www.gatsbyjs.org/docs/local-https/ for setting up ssl on localhost
*/

import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

// Layout
import Layout from "../components/layout/Layout"
// Containers
import RenderRichContent from "../components/containers/RenderRichContent"

export default ({ data }) => {
  const { pageTitle, shoutOut, _rawContent } = data.sanityPages



// check if there is a iframe loaded... if not reload page




  return (
    <>
      <Helmet>
        <script src={"/js/checkin2.js"} />
        <link rel="stylesheet" type="text/css" href={"/styles/checkin.css"} />
      </Helmet>
      <Layout>
        <div
          className="
              flex justify-between items-center
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
              <p>{shoutOut}</p>
            </div>
          )}
        </div>
        <RenderRichContent content={_rawContent} />
        <div id="checkin_registration">&nbsp;</div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    sanityPages(slug: { current: { eq: "nameless-tickets" } }) {
      pageTitle
      shoutOut
      _rawContent(resolveReferences: { maxDepth: 5 })
    }
  }
`
