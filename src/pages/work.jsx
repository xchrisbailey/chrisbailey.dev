import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import WorkCard from '../components/WorkCard'
import SEO from '../components/seo'

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
      {works.map(item => (
        <WorkCard
          key={item.node.id}
          title={item.node.frontmatter.title}
          description={item.node.frontmatter.description}
          shot={item.node.frontmatter.image}
          date={item.node.frontmatter.date}
          tech={item.node.frontmatter.tech}
          repo={item.node.frontmatter.repo}
          live={item.node.frontmatter.live}
        />
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
