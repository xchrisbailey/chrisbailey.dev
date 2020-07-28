import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const WorkCard = ({ date, description, title, tech, shot, repo, live }) => {
  return (
    <CardContainer>
      <Title>
        <h1>{title}</h1>
      </Title>
      <ImageBox>
        <Img fluid={shot.childImageSharp.fluid} />
      </ImageBox>
      <ContentBox>
        <p>
          <span className="desc">created</span> {date}
        </p>
        <p>
          <span className="desc">info</span> {description}
        </p>
        <p>
          <span className="desc">tech used</span>{' '}
          {tech.map(t => (
            <span key={t}>{t}, </span>
          ))}
        </p>
      </ContentBox>
      <LinkBox>
        <Link to={repo}>github</Link>
        <Link to={live}>live site</Link>
      </LinkBox>
    </CardContainer>
  )
}

const CardContainer = styled.article`
  width: 100%;
  background: ${({ theme }) => theme.background};
  padding: 0;
  margin: 0;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.primary};
  padding: 10px 5px;
  margin: 4px 4px 0 4px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  h1 {
    margin: 0;
    padding: 0;
  }
`

const ImageBox = styled.div`
  margin: 0 4px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  overflow: hidden;
`

const ContentBox = styled.div`
  padding: 4px;
  margin: 0px;
  p {
    color: ${({ theme }) => theme.body};
    font-size: 0.8em;
    margin-bottom: 0.3em;
    span.desc {
      color: ${({ theme }) => theme.background};
      background: ${({ theme }) => theme.body};
      font-weight: bold;
      padding: 2px;
      border-radius: 5px;
    }
  }
`

const LinkBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4px;
  border-radius: 5px;
  padding: 4px;
  background-color: ${({ theme }) => theme.body};
  a {
    font-size: 0.8em;
  }
`

export default WorkCard
