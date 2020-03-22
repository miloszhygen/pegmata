/*

  <RenderRichContent content={content}/>

*/

import React from "react"
import PortableText from "./PortableText"
import Image from "../primitives/Image"
import ConfirmedSpeaker from "../layout/ConfirmedSpeaker"

const RenderRichContent = ({ content }) => {
  // If no content dont continue
  if (!content) return null
  // Checks if the content is an array or not. If its an object, make the content an array
  if (!content.length) {
    content = [content] // Oh my God this is not good, fix this to something else
  }

  return content.map(c => {
    if (c._type === "plainText") {
      return (
        <React.Fragment key={`${c._type}_${c._key}`}>
          {c.textContent}
        </React.Fragment>
      )
    }

    if (c._type === "imageObject") {
      return (
        <React.Fragment key={`${c._type}_${c._key}`}>
          <Image image={c.image} alt={c.alt} aspectRatio={c.aspectRatio} />
        </React.Fragment>
      )
    }

    if (c._type === "person") {
      return (
        <React.Fragment key={`${c._type}_${c._key}`}>
          <ConfirmedSpeaker person={c} />
        </React.Fragment>
      )
    }

    if (c._type === "richText") {
      return (
        <React.Fragment key={`${c._type}_${c._key}`}>
          <PortableText blocks={c.textContent} />
        </React.Fragment>
      )
    }
    return null
  })
}
export default RenderRichContent
