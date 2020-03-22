import React from "react"
import Plx from "react-plx"
import { Link } from "gatsby"
const name = [
  {
    start: "self",
    startOffset: 0,
    duration: 200,
    easing: "easeInExpo",
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: "opacity",
      },
    ],
  },
]
const StickyScreamingBuyButton = props => {
  return (
    <div>
      <Link to={`/tickets`}>
        <div
          className="
        fixed
        min-w-full md:min-w-0
        h-20 md:h-full
        bottom-0 right-0 left-0 md:left-auto
        md:top-0 md:right-0
        p-2
        uppercase
        bg-green
        hover:bg-black hover:text-white
        z-50
        hidden md:block"
        >
          <p
            className="
          h-full
          text-center
          "
            style={{ writingMode: "vertical-rl" }}
          >
            ↑ Buy tickets ↑ Buy tickets ↑ Buy tickets ↑
          </p>
        </div>
      </Link>
      <Link to={`/tickets`}>
        <Plx
          parallaxData={name}
          className="
        fixed
        min-w-full md:min-w-0
        h-20 md:h-full
        bottom-0 right-0 left-0 md:left-auto
        md:top-0 md:right-0
        p-2
        uppercase
        bg-green
        hover:bg-black hover:text-white
        z-50
        block md:hidden"
        >
          <p
            className="
          h-full
          text-center
          text-massive
          "
          >
            tickets →
          </p>
        </Plx>
      </Link>
    </div>
  )
}

export default StickyScreamingBuyButton
