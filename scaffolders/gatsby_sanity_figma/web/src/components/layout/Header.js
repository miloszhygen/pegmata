import React from "react"
// import classNames from "classnames"
// import Link from "../components/Link"
import HamburgerMenu from "../primitives/HamburgerMenu"
import GreenModeToggle from "../primitives/GreenModeToggle"
import { Link } from "gatsby"

// const logoClasses = dark =>
//   classNames({
//     "text-lg font-sans outline-none focus:shadow-outline": true,
//     link: !dark,
//   })

const Header = ({
  toggleHamburger,
  hamburgerOpen,
  breadcrumb,
  hideHamburger,
  currentPage,
}) => (
  <header className="flex flex-center justify-between items-center">
    {/* <Link slug="/" className={logoClasses(hamburgerOpen)}>
      Netlife
    </Link> */}
    <Link
      to={`/`}
      className="hover:text-green"
      style={{ lineHeight: "1.3rem" }}
    >
      Y <br />
      Oslo
    </Link>

    <p>
      Youngstorget <br />
      26.08 — 28.08 2020
    </p>
    <GreenModeToggle></GreenModeToggle>

    {!hideHamburger && (
      <>
        <HamburgerMenu isOpen={hamburgerOpen} toggleMenu={toggleHamburger} />
      </>
    )}
  </header>
)

export default Header

// import React from "react"
// import { Link } from "gatsby"
// const Header = ({ siteTitle, pages }) => {
//   return (
//     <header
//       style={{
//         background: "rebeccapurple",
//         marginBottom: "1.45rem",
//       }}
//     >
//       <div
//         style={{
//           background: "rebeccapurple",
//           marginBottom: "1.45rem",
//         }}
//       >
//         <div
//           style={{
//             margin: "0 auto",
//             maxWidth: 960,
//             padding: "1.45rem 1.0875rem",
//             display: "flex",
//             justifyItems: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <h1 style={{ margin: 0, flex: 1 }}>
//             <Link
//               to="/"
//               style={{
//                 color: "white",
//                 textDecoration: "none",
//               }}
//             >
//               {siteTitle}
//             </Link>
//           </h1>
//           <div>
//             <nav>
//               <ul style={{ display: "flex", flex: 1 }}>
//                 {pages.map(({node:{title, slug}}) => (
//                   <li
//                     key={slug.current}
//                     style={{
//                       listStyleType: `none`,
//                       padding: `1rem`,
//                     }}
//                   >
//                     <Link style={{ color: `white` }} to={slug.current}>
//                       {title}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </header>
// )}

// export default Header
