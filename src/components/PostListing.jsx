import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

const PostListing = ({ post }) => {
  return (
    <ListingBox>
      <Link to={post.slug}>{post.frontmatter.title}</Link>
      <InfoBar>
        <p>
          <span role="img" aria-label="calendar">
            🗓
          </span>{' '}
          {post.frontmatter.date}
        </p>
        <p>
          <span role="img" aria-label="coffee">
            ☕️
          </span>{' '}
          {post.timeToRead}min/s to read
        </p>
      </InfoBar>
      <Excerpt>
        <p>{post.excerpt}</p>
      </Excerpt>
    </ListingBox>
  )
}

const ListingBox = styled.article`
  border-bottom: 4px solid var(--color-purple-light);
  padding: 2px;
  margin-bottom: 2em;
`

const Title = styled.h1`
  font-size: 26px;
  text-decoration: none;
  margin: 0;
`

const InfoBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  p {
    font-size: 16px;
    margin: 0;
  }
`

const Excerpt = styled.div`
  margin: 0;
  margin-bottom: 5px;
  p {
    margin: 0;
  }
`

const Link = styled(GatsbyLink)`
  color: var(--color-purple-dark);
  font-size: 26px;
  text-decoration: none;
  margin: 0;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    text-decoration: none;
    color: var(--color-purple-light);
  }
`

export default PostListing
