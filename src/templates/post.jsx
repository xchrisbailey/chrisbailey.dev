import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'
import { GatsbySeo } from 'gatsby-plugin-next-seo'

import Layout from '../components/Layout'

const Post = ({ data: { mdx } }) => {
  return (
    <Layout>
      <GatsbySeo title={mdx.frontmatter.title} description={mdx.excerpt} />
      <article>
        <Title>{mdx.frontmatter.title}</Title>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </article>
    </Layout>
  )
}

const Title = styled.h1`
  margin-bottom: 1.25em;
`

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      body
      timeToRead
      excerpt
      frontmatter {
        title
        date(fromNow: true)
      }
    }
  }
`

export default Post
