import React from "react"
import { Link } from "gatsby"
const BigLink = props => {
  return (
    <div>
      <Link
        to={`/program`}
        className="
        text-huge flex justify-between
        bg-green
        w-full
        p-4
        uppercase
        hover:bg-black hover:text-green"
      >
        {props.title}
        <span className="text-huge">→</span>
      </Link>
    </div>
  )
}

export default BigLink
