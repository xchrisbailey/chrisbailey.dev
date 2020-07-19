import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const Post = ({ data: { mdx } }) => {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <article>
        <h1>{mdx.frontmatter.title}</h1>

        <p>
          🗓 posted {mdx.frontmatter.date} | ☕️ {mdx.timeToRead} minutes to read
        </p>

        <MDXRenderer>{mdx.body}</MDXRenderer>
      </article>
    </Layout>
  )
}

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
