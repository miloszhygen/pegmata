import React from "react"
import { Link } from "gatsby"
const BackInTime = props => {
  return (
    <>
      <Link
        to={`/program`}
        className="
        text-huge
        flex justify-between
        bg-black
        text-green
        w-full p-4
        uppercase
        hover:text-white"
      >
        <span className="text-huge">←</span>
        {props.title}
      </Link>
    </>
  )
}

export default BackInTime
