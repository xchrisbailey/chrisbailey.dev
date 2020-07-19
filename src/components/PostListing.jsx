import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const PostListing = ({ post }) => {
  return (
    <ListingBox>
      <Title>
        <Link to={post.slug}>{post.frontmatter.title}</Link>
      </Title>
      <InfoBar>
        <p>
          <span role="img" aria-label="calendar">
            🗓
          </span>{' '}
          {post.frontmatter.date}
        </p>
        <p> | </p>
        <p>
          <span role="img" aria-label="coffee">
            ☕️
          </span>{' '}
          {post.timeToRead}min/s to read
        </p>
      </InfoBar>
    </ListingBox>
  )
}

const ListingBox = styled.article`
  padding: 2px;
  margin-bottom: 1.5em;
`

const Title = styled.h3`
  text-decoration: none;
  margin: 0;
  a {
    color: inherit;
    text-decoration: none;
    padding: 4px;
    &:hover {
      text-decoration: none;
      color: ${({ theme }) => theme.body};
      background-color: ${({ theme }) => theme.heading};
    }
  }
`

const InfoBar = styled.div`
  display: flex;
  margin-bottom: 5px;
  p {
    font-size: 16px;
    margin: 0;
    padding: 4px;
  }
`

export default PostListing
