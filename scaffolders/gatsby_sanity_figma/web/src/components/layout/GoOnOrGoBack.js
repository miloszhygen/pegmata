import React from "react"
import { Link } from "gatsby"
const GoOnOrGoBack = props => {
  return (
    <>
      <div
        className="
        flex flex-col md:flex-row justify-center
        pt-16
        mb-16"
      >
        <Link
          to={props.BackInTimeUrl}
          className="
          min-h-32
          p-4
          bg-green hover:text-white
          text-xl uppercase
          "
        >
          <div className="text-center">
            <span className="">{props.BackInTime}</span>
            <br />
            <span className="text-massive">←</span>
          </div>
        </Link>

        <Link
          to={props.ForwardInTimeUrl}
          className="
          min-h-32
          p-4
          bg-black text-white hover:text-green
          text-xl uppercase
          transform rotate-4
          "
        >
          <div className="text-center">
            <span>{props.ForwardInTime}</span>
            <br />
            <span className="text-massive">→</span>
          </div>
          
        </Link>
      </div>
    </>
  )
}

export default GoOnOrGoBack
