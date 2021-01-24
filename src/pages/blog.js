import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./blog.css"

const BlogPosts = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={"Blog"}>
        <SEO title="All blog posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={"Blog"}>
      <SEO title="All blog posts" />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <Link className="blog-headline" to={post.fields.slug} itemProp="url">
                    <span itemProp="headline" className="blog-headline">{title}</span>
                  </Link>
                  <div className="blog-subheadline">
                    <div>{post.frontmatter.date}</div>
                    {post.frontmatter.tags && post.frontmatter.tags.length > 0 ? ` — ` : ``}                    
                    {post.frontmatter.tags && post.frontmatter.tags.map((t, i) => (
                      <Link key={`${title}—${t}`} className="blog-subheadline-tags" to={"/tags/"+t}>
                        {i === 0 ? "" : ","} {t}
                      </Link>
                    ))}
                  </div>
                </header>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPosts

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          tags
        }
      }
    }
  }
`
