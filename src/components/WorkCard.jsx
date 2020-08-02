import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const WorkCard = ({ date, description, title, tech, image, repo, live }) => {
  return (
    <CardContainer>
      <ImageBox>
        <Img fluid={image.childImageSharp.fluid} />
      </ImageBox>
      <ContentBox>
        {title}
        <span className="desc">created</span> {date}
        <span className="desc">info</span> {description}
        <span className="desc">tech used</span>{' '}
        {tech.map(t => (
          <span key={t}>{t}, </span>
        ))}
        {repo ? <a href={repo}>github</a> : null}
        {live ? <a href={live}>live site</a> : null}
      </ContentBox>
    </CardContainer>
  )
}

const CardContainer = styled.article`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 250px;
  background: ${({ theme }) => theme.body.secondary};
  padding: 0;
  margin: 0;
  border-radius: 5px;
  overflow: hidden;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
`

const ImageBox = styled.div`
  padding: 0;
  margin: 0;
  border-top-left-radius: 5px;
  width: 250px;
  /* border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px; */
  overflow: hidden;
`

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
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

export default WorkCard
