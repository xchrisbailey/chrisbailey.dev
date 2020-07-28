import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const Post = ({ data: { mdx } }) => {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <article>
        <Title>{mdx.frontmatter.title}</Title>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </article>
    </Layout>
  )
}

const Title = styled.h1`
  margin-bottom: 5px;
`

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      body
      timeToRead
      frontmatter {
        title
        date(fromNow: true)
      }
    }
  }
`

export default Post
