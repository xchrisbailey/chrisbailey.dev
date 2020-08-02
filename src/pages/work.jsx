/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import WorkCard from '../components/WorkCard'

const work = ({ data }) => {
  const works = data.allMdx.edges
  return (
    <Layout>
      <SEO title="work" />
      <h1>Things I&apos;ve Created</h1>
      <p>
        listing of the things I&apos;ve created, the stack they use/d and a
        little info about the project itself.
      </p>

      <p>coming...</p>
      {works.map(w => (
        <WorkCard {...w.node.frontmatter} />
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(
      filter: { frontmatter: {}, fileAbsolutePath: { regex: "/.*works.*/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            description
            tech
            repo
            live
            image {
              childImageSharp {
                fluid(fit: COVER) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            title
          }
        }
      }
    }
  }
`

export default work
