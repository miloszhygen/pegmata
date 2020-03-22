import React from "react"
// import PropTypes from 'prop-types';
import classNames from "classnames"
import { graphql, useStaticQuery, Link } from "gatsby"

const navClasses = isOpen =>
  classNames({
    "flex flex-wrap mt-32 pt-0 md:pt-8 absolute": true,
    "sr-only": !isOpen,
  })

/* The menu/overlay always exists in the DOM, but it is visually hidden
 * by default. That way it is always accessible to screen readers.
 * This components state will toggle if its visually hidden or not.
 */
const HamburgerMenu = ({ toggleMenu, isOpen }) => {
  const { sanitySiteSettings } = useStaticQuery(
    graphql`
      query {
        sanitySiteSettings {
          globalMenu {
            text
            internalPage {
              ... on SanityArticle {
                id
                _type
                slug {
                  current
                }
                title
              }
              ... on SanityPages {
                id
                slug {
                  current
                }
                title
              }
            }
            url
          }
        }
      }
    `
  )

  const { globalMenu = [] } = sanitySiteSettings

  const RenderLinks = () => {
    return globalMenu.map((link, i) => {
      const { text, url, internalPage } = link

      if (internalPage) {
        const { slug } = internalPage
        return (
          <li
            className="
              text-xl uppercase
              hover:text-green
              header-link"
            key={`menu_item_${i}`}
          >
            <Link to={`/${slug.current}`}>{text}</Link>
          </li>
        )
      }
      return (
        <li
          className="
            text-xl uppercase
            hover:text-green
            header-link
          "
          key={`menu_item_${i}`}
        >
          <a href={url} rel={`noopener noreferrer`}>
            {text}
          </a>
        </li>
      )
    })
  }

  return (
    <>
      <button
        onClick={toggleMenu}
        className="
          float-right w-5
          text-lg text-center
          hover:text-green
          focus:outline-none focus:shadow-outline
        "
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Hovedmenyknapp"
      >
        {isOpen ? "X" : ""}
      </button>

      <div className={navClasses(isOpen)}>
        <nav className="w-full mt-16">
          <ul>
            <RenderLinks />
          </ul>
        </nav>
      </div>
    </>
  )
}

// HamburgerMenu.propTypes = {
//   toggleMenu: PropTypes.func,
//   isOpen: PropTypes.bool
// };

export default HamburgerMenu
