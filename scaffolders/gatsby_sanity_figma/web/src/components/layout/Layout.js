import React from "react"
import Helmet from "react-helmet"
import Header from "./Header"
import Footer from "./Footer"


const Layout = ({ children }) => (
  <div>
    <Helmet>
      <title>SITE TITLE</title>
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

export default Layout
