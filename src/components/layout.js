import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children}) => {
    return (
        <div>
            <title>{pageTitle}</title>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
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