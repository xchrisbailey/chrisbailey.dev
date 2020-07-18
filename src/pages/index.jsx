import React from 'react'
import { graphql, Link } from 'gatsby'
import { Box, Text } from '@chakra-ui/core'

const index = ({ data }) => {
  const posts = data.allMdx.edges
  return (
    <Box p={3} w="600px" mx="auto">
      {posts.map(post => (
        <Box key={post.node.id}>
          <Text fontSize="xl">
            <Link to={post.node.slug}>{post.node.frontmatter.title}</Link>
          </Text>
          <Text>
            {post.node.frontmatter.date} | {post.node.timeToRead}min read
          </Text>
          <Text>{post.node.excerpt}</Text>
        </Box>
      ))}
    </Box>
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
