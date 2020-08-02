import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

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
        {repo ? <a href={repo}>github</a> : null}
        {live ? <a href={live}>live site</a> : null}
      </LinkBox>
    </CardContainer>
  )
}

const CardContainer = styled.article`
  width: 50%;
  background: ${({ theme }) => theme.body.secondary};
  padding: 0;
  margin: 0;
  border-radius: 5px;
  overflow: hidden;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.color.primary};
  padding: 10px 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  h1 {
    margin: 0;
    padding: 0;
  }
`

const ImageBox = styled.div`
  /* border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px; */
  overflow: hidden;
`

const ContentBox = styled.div`
  padding: 4px;
  margin: 0px;
  p {
    color: ${({ theme }) => theme.color.text};
    font-size: 0.8em;
    margin-bottom: 0.3em;
    span.desc {
      color: ${({ theme }) => theme.color.primary};
      font-weight: bold;
      font-style: italic;
      padding: 2px;
      border-radius: 5px;
      margin-right: 0.4em;
    }
  }
`

const LinkBox = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.primary};
  a {
    background-color: ${({ theme }) => theme.color.secondary};
    color: ${({ theme }) => theme.color.text};
    /* border-radius: 5px; */
    padding: 4px;
    font-size: 0.8em;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.color.text};
      background-color: ${({ theme }) => theme.color.primary};
    }
  }
`

export default WorkCard
