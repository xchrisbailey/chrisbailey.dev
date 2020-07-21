import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Grid from '../components/Grid'
import WorkCard from '../components/WorkCard'

const work = ({ data }) => {
  const works = data.allMdx.edges
  return (
    <Layout>
      <h1>Things I&apos;ve Created</h1>
      <p>
        listing of the things I&apos;ve created, the stack they use/d and a
        little info about the project itself.
      </p>
      <Grid columns={2}>
        {works.map(work => (
          <WorkCard
            key={work.node.id}
            title={work.node.frontmatter.title}
            description={work.node.frontmatter.description}
            shot={work.node.frontmatter.image}
            date={work.node.frontmatter.date}
            tech={work.node.frontmatter.tech}
          />
        ))}
      </Grid>
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
            image {
              childImageSharp {
                fluid {
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
