import React from "react"
import { Link } from "gatsby"
const BuyTickets = props => {
  return (
    <div
      className="
        flex flex-col mx-auto
        m-16
        uppercase text-xl
        fit-content"
    >
      <Link
        to={`/tickets`}
        className="
        bg-green
        hover:bg-black hover:text-white
        p-2"
      >
        Buy Tickets
      </Link>
      <Link
        to={`/tickets`}
        className="
        bg-green
        transform rotate-3neg
        hover:bg-black hover:text-white
        p-2"
      >
        Buy Tickets
      </Link>
      <Link
        to={`/tickets`}
        className="
        bg-green
        hover:bg-black hover:text-white
        transform rotate-2
        p-2"
      >
        Buy Tickets
      </Link>
    </div>
  )
}

export default BuyTickets
