import React from "react"
// import classNames from "classnames"
import { graphql, useStaticQuery } from "gatsby"
// import Link from '../components/Link';

import RenderRichContent from "../../components/containers/RenderRichContent"
// const linkClasses = dark =>
//   classNames({
//     "link font-sans": !dark,
//     "font-lining outline-none focus:shadow-outline": dark,
//   })

export default ({ dark }) => {
  const { sanitySiteSettings } = useStaticQuery(
    graphql`
      query {
        sanitySiteSettings {
          _rawFooterContent
        }
      }
    `
  )

  const content = sanitySiteSettings._rawFooterContent || []

  return (
    <footer
      className="
      flex flex-wrap
      pt-10
      border-solid border-black border-t"
    >
      <div className="w-full md:w-3/6 mb-3">
        Y <br />
        Oslo
      </div>
      <div className="flex flex-wrap w-full md:w-3/6">
        <ul>
          <RenderRichContent content={content} />
          <li className="flex items-center mt-2">
            <span className="leading-none">
              Y Oslo is an event by
              <a
                className="
                  inline-block
                  mt-1 ml-1
                  netlife-sans-logo
                  font-bold leading-none
                  hover:text-green-dark hover:border-green-dark"
                href="https://www.netlife.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Netlife
              </a>
            </span>
          </li>
        </ul>

        {/* {items.map(item => (
          <div className="w-full md:w-1/2" key={item._key}>
            <Link
              href={item.url}
              slug={item.internalPage?.slug?.current}
              noFollow={item.nofollow}
              className={linkClasses(dark)}
            >
              {item.text}
            </Link>
          </div>
        ))} */}
      </div>
    </footer>
  )
}
