import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Github } from '@styled-icons/evaicons-solid/Github'
import { Browser } from '@styled-icons/evaicons-solid/Browser'

import Label from './Label'

const WorkCard = ({ date, description, title, tech, image, repo, live }) => {
  return (
    <Box>
      <ImageBox>
        <Img fluid={image.childImageSharp.fluid} alt={`${title} screen shot`} />
      </ImageBox>
      <ContentBox>
        <SiteInfo>
          <h1 className="title">{title}</h1>
          <p>
            This project was created on or around{' '}
            <span className="date">{date}</span> using{' '}
            {tech.map(t => (
              <Label key={`${t}${Math.random * 100}`}>{t} </Label>
            ))}
            and is a {description}
          </p>
        </SiteInfo>
        <Links>
          {repo ? (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              aria-label="github link"
            >
              <Github size="1em" />
            </a>
          ) : null}

          {live ? (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              aria-label="live site link"
            >
              <Browser size="1em" />
            </a>
          ) : null}
        </Links>
      </ContentBox>
    </Box>
  )
}

const Box = styled.article`
  background: ${({ theme }) => theme.body.secondary};
  display: flex;
  width: 100%;
  height: 250px;
  margin: 0;
  padding: 0;
  border-radius: 5px;
  overflow: hidden;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
`

const ImageBox = styled.div`
  min-width: 250px;
  min-height: 100%;
  flex-grow: 5;
`

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
  max-height: 100%;
  padding: 0.5em;
`

const Links = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  a {
    font-size: 1.25em;
  }
`

const SiteInfo = styled.div`
  .title {
    align-self: center;
    border: 0;
    box-shadow: none;
    font-size: 1.3em;
    color: ${({ theme }) => theme.color.primary};
    margin: 0;
    padding: 0;
    text-align: center;
    border-bottom: 5px solid ${({ theme }) => theme.body.primary};
  }
  p {
    font-size: 0.9em;
    padding-top: 0.5em;
    .date {
      font-family: 'Fira Code', monospace;
      font-size: 0.9em;
      color: ${({ theme }) => theme.color.orange};
      text-decoration-line: underline;
      text-decoration-style: double;
    }
  }
`

export default WorkCard
