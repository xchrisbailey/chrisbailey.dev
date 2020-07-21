import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const WorkCard = ({ date, description, title, tech, shot }) => {
  return (
    <CardContainer>
      <Title>
        <h1>{title}</h1>
      </Title>
      <Img fluid={shot.childImageSharp.fluid} />
      <p>{description}</p>
      <p>
        {tech.map(t => (
          <span key={t}>{t}, </span>
        ))}
      </p>
    </CardContainer>
  )
}

const CardContainer = styled.article`
  width: 100%;
  background: #fff;
  padding: 0;
  margin: 0;
  border-radius: 5px;
  overflow: hidden;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.heading};
  padding: 10px 5px;
  h1 {
    margin: 0;
    padding: 0;
  }
`

export default WorkCard
