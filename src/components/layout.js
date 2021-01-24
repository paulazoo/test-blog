import React from "react"
import { envVars } from '../../env.js'
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import "./layout.css"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  
  header = (
    <>
      <div>
        <Link className="header-nav-link" to="/">
          <p className="global-title">
            Blog Title
          </p>
        </Link>
        </div>
      <div className="header-sub">
        <Link className="header-nav-link" to="/blog">
          <p className="header-sub-title">
            Blog
          </p>
        </Link>
        <Link className="header-nav-link" to="/about">
          <p className="header-sub-title">
            About
          </p>
        </Link>
        <Link className="header-nav-link" to="/tags">
          <p className="header-sub-title">
            All Tags
          </p>
        </Link>
      </div>
    </>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'></link>
      <header className="global-header">{header}</header>
      <p className="main-title"><b>{title}</b></p>
      <main>{children}</main>
      <footer className='layout-footer'>
        © {new Date().getFullYear()} by {envVars.AUTHOR_NAME}. All rights reserved.
      </footer>
    </div>
  )
}

export default Layout
