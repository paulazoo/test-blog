import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const TagPage = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  const posts = data.allMarkdownRemark.nodes
  const tagHeader = `${data.allMarkdownRemark.totalCount} post${
    data.allMarkdownRemark.totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout location={location} title={tagHeader}>
      <SEO title={tagHeader} />
      <ol style={{ listStyle: `none` }}>
        {posts &&
        posts.map((post) => {
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

TagPage.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default TagPage

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      nodes  {
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

