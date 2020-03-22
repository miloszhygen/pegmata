import React from "react"
const ConfirmationComponent = props => {
  return (
    <>
      {/* <h1 className="text-massive text-center">
        <span className="text-green intro1">S</span>
        <span className="intro2">y</span>
        <span className="intro3 text-green">c</span>
        <span className="intro4 text-green">c</span>
        <span className="text-green intro5">ess</span>
      </h1> */}
      <div className="max-w-sm mx-auto mb-8">
        <p>
          You've successfully registered for Y 2020. More information about the
          event will be sent out in a little while.
        </p>
      </div>
      <br />
      <div className="max-w-sm mx-auto mb-8">
        <p className="netlife-sans">
          If you have registered more than one ticket, Checkin will send you an
          email with a link where you can register the other attendees. This
          email will come within 24 hours. The tickets are fully digital, no
          printing is needed!
        </p>
      </div>

      <div className="max-w-sm mx-auto mb-8">
        <p>We're super stoked that you'll join us next year</p>
      </div>
    </>
  )
}

export default ConfirmationComponent
