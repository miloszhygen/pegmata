import React, { useState, useEffect } from 'react';
// import { graphql } from 'gatsby';
// import PropTypes from 'prop-types';
import Layout from '../containers/layout';

// export const ImageFragment = graphql`
//   fragment ImageFragment on SanityImage {
//     asset {
//       _id
//     }
//     hotspot {
//       y
//       x
//       width
//       height
//       _type
//       _key
//     }
//     crop {
//       top
//       right
//       left
//       bottom
//       _type
//       _key
//     }
//   }
// `;

function LayoutContainer(props) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  function toggleHamburger() {
    setHamburgerOpen(!hamburgerOpen);
  }

  useEffect(() => {
    if (!props.hideHamburger) {
      function closeHamburger(e) {
        if(e.code === 'Enter' || e.code === 'Escape') {
          setHamburgerOpen(false);
        }
      }
      window.addEventListener('keydown', e => closeHamburger(e));
      return () => window.removeEventListener('keydown', closeHamburger);
    }
  }, [props.hideHamburger]);

  return (
    <Layout
      {...props}
      hamburgerOpen={hamburgerOpen}
      toggleHamburger={toggleHamburger}
    />
  );
}

// LayoutContainer.propTypes = {
//   hideHamburger: PropTypes.bool
// };

export default LayoutContainer;



// import React from 'react';
// import {Helmet} from "react-helmet";
// import { StaticQuery, graphql } from "gatsby"


// import Header from './Header';


// const Layout = ({ children }) => {

//   return (
//   <StaticQuery
//     query={graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//         allSanityPages {
//           edges {
//             node {
//               title
//               slug {
//                 current
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <React.Fragment>
//         <Helmet
//           title={data.site.siteMetadata.title}
//           meta={[
//             { name: 'description', content: 'Sample' },
//             { name: 'keywords', content: 'sample, something' },
//           ]}
//         >
//         </Helmet>
//         <Header siteTitle={data.site.siteMetadata.title} pages={data.allSanityPages.edges}/>
//         <div>
//           {children}
//         </div>
//       </React.Fragment>
//     )}
//   />
// )}

// export default Layout