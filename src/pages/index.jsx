import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'

const index = ({ data }) => {
  const posts = data.allMdx.edges
  return (
    <Layout>
      {posts.map(post => (
        <div key={post.node.id}>
          <h1>
            <Link to={post.node.slug}>{post.node.frontmatter.title}</Link>
          </h1>
          <h3>
            {post.node.frontmatter.date} | {post.node.timeToRead}min read
          </h3>
          <p>{post.node.excerpt}</p>
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx {
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
