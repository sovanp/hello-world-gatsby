import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle, 
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  // store return value from useStaticQuery in variable data 
  // graphql tag lets Gatsby know the string is a GraphQL query
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    // use className prop to apply classes to React Components
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
          </ul>
        </nav>
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
    </div>
  )
}

/*
const Layout = ({ pageTitle, children }) => {
  ...
}

It is a shorter way to do the follwing:

const Layout = (props) => {
  const pageTitle = props.pageTitle
  const children = props.children
  ...
}

*/

export default Layout