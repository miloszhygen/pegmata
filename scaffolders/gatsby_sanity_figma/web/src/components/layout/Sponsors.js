import React from "react"
// import { graphql, useStaticQuery } from "gatsby"

// const SPONSOR = "sponsor"

const Sponsors = () => {
  // const { allSanitySponsor } = useStaticQuery(
  //   graphql`
  //     query {
  //       allSanitySponsor {
  //         nodes {
  //           title
  //           link
  //           type
  //         }
  //       }
  //     }
  //   `
  // )

  // const { nodes: sponsors = [] } = allSanitySponsor

  return (
    <>
      <div
        className="
        flex justify-between items-center flex-col
        md:flex-row
        py-8
        bg-white
        uppercase
        "
      >
        <h3 className="mb-8 md:mb-0 text-lg">Take part or sponsor Y?</h3>
        {/* <h3 className="text-huge block md:hidden">↓</h3> */}
        {/* <h3 className="text-huge hidden md:block">→→→</h3> */}
        <div className="flex flex-col-reverse lg:flex-row">
          <a
            className="
            border-solid border-b border-black
            hover:border-green
            hover:text-green
           "
            href="mailto:hei@netlife.com"
          >
            Get in touch
          </a>
          {/* <a
            className="underline transform rotate-4"
            href="mailto:hei@netlife.com"
          >
            <span
              className="
            bg-green hover:bg-black hover:text-white
            p-1
            "
            >
              Get in touch
            </span>
          </a>
          <a
            className="underline transform rotate-2"
            href="mailto:hei@netlife.com"
          >
            <span
              className="
            bg-green hover:bg-black hover:text-white
            p-1
            "
            >
              Get in touch
            </span>
          </a> */}
        </div>
      </div>
      {/* Removed until there are sponors! */}
      {/* <div
        className="
        py-3 px-0 md:px-6
        flex flex-wrap"
      >
        <div className="px-4 py-2">Our sponsors:</div>
          {sponsors
            .filter(({type}) => type === SPONSOR)
            .map(({title, link}, i) => (
              <div className="px-4 py-2" key={`sponsor_link_${i}`}>
                <a href={link} className="border-link netlife-sans font-bold">
                  {title}
                </a>
              </div>
            ))
          }
      </div> */}
    </>
  )
}

export default Sponsors
