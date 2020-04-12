import React from "react"
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"


const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query SiteDataQuery {
        sanitySiteSettings {
          id
          title
        }
      }
    `
  );

  const {title} = data.sanitySiteSettings

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta
          name="Description"
          content=""
        ></meta>
        <link rel="canonical" href="#" />
      </Helmet>

      <div className="flex flex-col justify-between overflow-x-hidden min-h-screen">
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
