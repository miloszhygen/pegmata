import React from "react"
import { Link } from "gatsby"
const TicketStart = props => {
  return (
    <>
      <div
        className="
        flex flex-wrap items-end
        max-w-screen-md mx-auto"
      >
        <Link
          to={`/nameless-tickets`}
          className="
            w-full md:w-6/12
            p-2
            "
        >
          <div
            className="
            p-4
            bg-black hover:bg-green
            text-white hover:text-black
            "
          >
            <h3
              className="
                text-lg uppercase
                mb-8"
            >
              I know who is going and who’s coming with me
            </h3>
            <p className="netlife-sans mb-4">
              I who is going and I know who is coming with me
            </p>
            <span className="text-massive">→</span>
          </div>
        </Link>
        <Link
          to={`/name-ticket`}
          className="
            w-full md:w-6/12
            p-2
            "
        >
          <div
            className="
            p-4
            bg-black hover:bg-green
            text-white hover:text-black
            "
          >
            <h3
              className="
                text-lg uppercase
                mb-8"
            >
              I’ll buy tickets now, but decide later who’s actually going
            </h3>
            <p className="netlife-sans mb-4">
              I who is going and I know who is coming with me
            </p>
            <span className="text-massive">→</span>
          </div>
        </Link>
      </div>
    </>
  )
}

export default TicketStart
