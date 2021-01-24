import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ location }) => {

  return (
    <Layout location={location} title={"Hi."}>
      <SEO title="Hi" />
      <Bio />
    </Layout>
  )
}

export default BlogIndex
