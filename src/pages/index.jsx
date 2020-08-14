import React from 'react'
import { graphql } from 'gatsby'
import { GatsbySeo } from 'gatsby-plugin-next-seo'

import Layout from '../components/Layout'
import PostListing from '../components/PostListing'

const index = ({ data }) => {
  const posts = data.allMdx.edges
  return (
    <Layout>
      <GatsbySeo title="data.site.siteMetadata.title" />
      {posts.map(post => (
        <PostListing key={post.node.id} post={post.node} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 2000
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
          timeToRead
          slug
        }
      }
    }
  }
`

export default index
