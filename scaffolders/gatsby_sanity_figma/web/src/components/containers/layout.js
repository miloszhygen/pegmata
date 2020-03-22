import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import Header from "../layout/Header"
import Footer from "../layout/Footer"
import Newsletter from "../layout/Newsletter"
import Sponsors from "../layout/Sponsors"

const mainWrapperClasses = hamburgerOpen =>
  classNames({
    "flex flex-col justify-between overflow-x-hidden min-h-screen px-5vw sm:px-7-5vw py-4vw z-50": true,
    "bg-black text-white": hamburgerOpen,
  })

const contentWrapperClasses = hamburgerOpen =>
  classNames({
    "mt-6 flex-grow": true,
    "sr-only": hamburgerOpen,
  })

const Layout = ({
  children,
  toggleHamburger,
  hamburgerOpen,
  breadcrumb,
  hideHamburger,
  currentPage,
}) => (
  <div>
    <Helmet>
      <title>Y Oslo</title>
      <meta
        name="Description"
        content="A conference where you will first learn to find the right problems, then how to design, build and grow services to solve them."
      ></meta>
      <link rel="canonical" href="https://www.y-oslo.com" />
    </Helmet>

    <div className={mainWrapperClasses(hamburgerOpen)}>
      {!hamburgerOpen && (
        <a href="#hovedinnhold" className="sr-only focus:not-sr-only">
          Hopp til hovedinnhold
        </a>
      )}

      <Header
        toggleHamburger={toggleHamburger}
        breadcrumb={breadcrumb}
        hideHamburger={hideHamburger}
        hamburgerOpen={hamburgerOpen}
        currentPage={currentPage}
      />

      <main
        id="hovedinnhold"
        className={contentWrapperClasses(hamburgerOpen)}
        hidden={hamburgerOpen}
      >
        {children}
        <Newsletter></Newsletter>
        <Sponsors></Sponsors>
        <Footer dark={hamburgerOpen} />
      </main>
    </div>
  </div>
)

Layout.propTypes = {
  hamburgerOpen: PropTypes.bool,
  hideHamburger: PropTypes.bool,
  toggleHamburger: PropTypes.func,
  breadcrumb: PropTypes.object,
  currentPage: PropTypes.string,
}

export default Layout
