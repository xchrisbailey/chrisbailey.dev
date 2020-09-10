/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { graphql } from 'gatsby'
import { GatsbySeo } from 'gatsby-plugin-next-seo'

import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

const project = ({ data }) => {
  const projects = data.allMdx.edges
  return (
    <Layout>
      <GatsbySeo title="projects" language="en" />
      <h1>Things I&apos;ve Created</h1>
      <p>
        listing of the things I&apos;ve created, the stack they use/d and a
        little info about the project itself.
      </p>

      {projects.map(w => (
        <ProjectCard key={w.node.id} {...w.node.frontmatter} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: {}, fileAbsolutePath: { regex: "/.*projects.*/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM YYYY")
            description
            tech
            repo
            live
            image {
              childImageSharp {
                fluid(maxHeight: 250, maxWidth: 250, cropFocus: CENTER) {
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

export default project
