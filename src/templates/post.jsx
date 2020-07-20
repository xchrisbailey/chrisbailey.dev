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

        <Info>
          <p>
            <span role="img" aria-label="calendar">
              🗓
            </span>{' '}
            posted {mdx.frontmatter.date}
          </p>{' '}
          <p>• </p>
          <p>
            {mdx.timeToRead} minutes to read{' '}
            <span role="img" aria-label="coffee">
              ☕️
            </span>
          </p>
        </Info>

        <MDXRenderer>{mdx.body}</MDXRenderer>
      </article>
    </Layout>
  )
}

const Title = styled.h1`
  margin-bottom: 5px;
`

const Info = styled.div`
  display: flex;
  justify-content: space-evenly;
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
