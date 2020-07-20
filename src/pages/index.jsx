import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import PostListing from '../components/PostListing'

const index = ({ data }) => {
  const posts = data.allMdx.edges
  return (
    <Layout>
      {posts.map(post => (
        <PostListing key={post.node.id} post={post.node} />
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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
