import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"
import RenderRichContent from "../components/containers/RenderRichContent"

export default ({ data }) => {
  const { sanitySiteSettings: settings } = data
  const content = settings._rawNotFoundMessage || []

  return (
    <Layout>
      <RenderRichContent content={content} />

      <h2 className="mb-4">Det er mest sannsynlig en av disse sin skyld</h2>
      <div class="grid gap-6 grid-cols-4">
        <img
          src="https://cdn.sanity.io/images/v1k28emo/production/f9571d50fb5b6930a223fd3741aa5bd780c35b1e-2000x1503.jpg?rect=249,0,1503,1503&w=512&h=512&fm=webp&q=80"
          alt=""
          className="relative"
        />
        <img
          src="https://cdn.sanity.io/images/v1k28emo/production/03f94eace1f3532e60eeee3c50b4e0e3ac8dccdb-1000x1000.jpg?w=512&h=512&fm=webp&q=80"
          alt=""
        />
        <img
          src="https://cdn.sanity.io/images/v1k28emo/production/eec0d9a694c50a8ff4eb345d93d2e6b63e29d29f-2000x2000.jpg?w=512&h=512&fm=webp&q=80"
          alt=""
        />
        <img
          src="https://cdn.sanity.io/images/v1k28emo/production/8e963decbaa71c9e173603daa505e09ca1f54237-2000x2342.jpg?rect=0,171,2000,2000&w=512&h=512&fm=webp&q=80"
          alt=""
        />
        <img
          src="https://cdn.sanity.io/images/v1k28emo/production/038c3e88e153db410a82b5ee9beab802f9819bf8-2000x2353.jpg?rect=0,176,2000,2000&w=512&h=512&fm=webp&q=80"
          alt=""
        />
        <img
          src="https://cdn.sanity.io/images/v1k28emo/production/437892ea40516b97455b233d7287148281f1cca4-2000x1800.png?rect=100,0,1800,1800&w=512&h=512&fm=webp&q=80"
          alt=""
        />
        <img
          src="https://cdn.sanity.io/images/v1k28emo/production/a078c1ada3ee54b899a3ea33d1c73c0d5848a45a-1000x668.jpg?rect=166,0,668,668&w=512&h=512&fm=webp&q=80"
          alt=""
        />
        <img
          src="https://cdn.sanity.io/images/v1k28emo/production/af40e00e7df424cbd56a0e90e5d31775c3628f72-2000x1330.jpg?rect=335,0,1330,1330&w=512&h=512&fm=webp&q=80"
          alt=""
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    sanitySiteSettings {
      _rawNotFoundMessage
    }
  }
`
