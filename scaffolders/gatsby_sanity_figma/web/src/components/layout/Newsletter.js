import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [subscribeOk, setSubscribeOk] = useState(null)
  const [language, setLanguage] = useState("no")

  const handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(email, {
      id: language === "en" ? "77e3b14ef5" : "e56b907155",
    })
    setSubscribeOk(result)
  }

  return (
    <div>
      <div
        className="
        flex flex-wrap
        mt-10
        py-8
        border-solid border-black border-t
        border-solid border-black border-b
        "
      >
        {/* <div
          className="
            w-full
            md:w-1/3 mb-3
            md:block hidden
          "
        >
          <svg
            width="170"
            height="237"
            viewBox="0 0 170 237"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M95.0477 98.8429L94.9789 9.8975C84.4701 -2.02607 71.1633 5.24336 71.1713 15.6454L71.2449 110.765"
              stroke="#010101"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M166.484 98.7884L166.443 45.4991C155.934 33.5755 142.627 40.8449 142.635 51.2469L142.678 106.733"
              stroke="#010101"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M142.659 82.9533L142.688 120.389C132.198 132.329 118.88 125.08 118.872 114.678L118.843 77.2422C129.333 65.3302 142.651 72.5791 142.659 82.9533Z"
              stroke="#010101"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M118.845 79.0222C118.837 68.648 105.519 61.3713 95.0282 73.3111L95.0646 120.426C105.573 132.35 118.88 125.08 118.872 114.678L118.845 79.0222Z"
              stroke="#010101"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M150.689 201.57C150.66 199.456 151.494 197.397 153.024 195.95C166.55 183.563 166.533 162.202 166.533 162.202L166.482 95.5073"
              stroke="#010101"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M67.2485 129.07L67.2764 129.07C68.1111 128.124 68.723 127.039 69.1399 125.87C70.64 120.974 71.3602 115.884 71.2448 110.766"
              stroke="#010101"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M150.688 201.569L150.707 225.627C150.71 229.993 147.148 233.556 142.776 233.559L79.2768 233.609C74.9043 233.612 71.3367 230.055 71.3333 225.688L71.323 212.338C71.3168 204.3 70.865 196.318 65.8746 189.591C64.1462 187.395 62.2229 185.339 60.1605 183.449C35.4112 159.883 31.0658 122.867 7.04025 98.9113C-0.903225 90.9908 7.02799 83.058 14.9653 83.0519C22.9027 83.0457 39.4859 98.8862 47.4324 110.784C49.8861 114.481 52.7295 117.928 55.9347 121.013C58.1366 123.208 60.6167 125.097 63.3194 126.625"
              stroke="#010101"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M55.2109 120.346C58.0538 123.125 61.2028 125.57 64.6021 127.625C68.1128 129.597 71.8737 131.069 75.7736 132.067C80.8991 133.398 85.3297 136.565 88.2296 140.985C90.0699 143.793 91.075 147.018 91.1333 150.356"
              stroke="#010101"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div> */}

        <div className="w-full mb-3">
          <p className="text-huge uppercase">More mail?</p>
          <div
            className="
          flex flex-col md:flex-row"
          >
            {!subscribeOk ? (
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="mt-4">
                  <div className="mt-2">
                    <label className="inline-flex items-center checkcontainer">
                      <span className="ml-2">I’m OK with norwegian</span>
                      <input
                        checked={language === "no"}
                        type="radio"
                        className="form-radio"
                        name="language"
                        value="no"
                        onClick={() => {
                          setLanguage("no")
                        }}
                      />
                      <span className="radiobtn"></span>
                    </label>

                    <label className="inline-flex items-center ml-6 checkcontainer">
                      <span className="ml-2">
                        I prefer information in English
                      </span>
                      <input
                        type="radio"
                        className="form-radio"
                        name="language"
                        value="en"
                        onClick={() => {
                          setLanguage("en")
                        }}
                      />
                      <span className="radiobtn"></span>
                    </label>
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    className="

                      mr-2
                      mb-2 md:mb-0"
                  >
                    <span className="label hidden">Your email address</span>
                    <input
                      className="
                        p-2
                        border
                        w-64
                      "
                      placeholder="Your email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                  </label>

                  <button
                    type="submit"
                    className="
                      border p-2 flex-grow-0
                      bg-green border-green
                      hover:border-black hover:text-white hover:bg-black
                      md:mt-2
                    "
                  >
                    Sign up
                  </button>

                  {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                  <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_b2b7628fe68612e86f36ffcbd_e56b907155"
                      tabIndex="-1"
                    />
                  </div>
                </div>

                <div className="md:w-2/3 lg:w-1/2">
                  <p className="netlife-sans">
                    We think the usefulness of this email will outweigh the
                    inconvenience to your inbox.
                  </p>
                </div>

                {/* <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span class="ml-2">I agree to the <Link className="underline hover:text-green-dark" to="/privacy-policy-and-cookies">Privacy Policy.</Link></span>
                </label> */}
              </form>
            ) : (
              <p>
                {/* https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml */}
                <div dangerouslySetInnerHTML={{ __html: subscribeOk.msg }} />
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
