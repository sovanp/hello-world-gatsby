import * as React from 'react'
import { Link } from 'gatsby'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText 
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    return (
        // use className prop to apply classes to React Components
      <div className={container}>
        <title>{pageTitle}</title>
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