import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PostListing from '../components/PostListing'
import SEO from '../components/seo'

const index = ({ data }) => {
  const posts = data.allMdx.edges
  return (
    <Layout>
      <SEO title="launchpad" />
      {posts.map(post => (
        <PostListing key={post.node.id} post={post.node} />
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/.*posts.*/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt(pruneLength: 160)
          timeToRead
          slug
        }
      }
    }
  }
`

export default index
