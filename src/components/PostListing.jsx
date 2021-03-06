import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import media from 'styled-media-query'
import { BookOpenOutline } from '@styled-icons/evaicons-outline/BookOpenOutline'
import { CalendarOutline } from '@styled-icons/evaicons-outline/CalendarOutline'

const PostListing = ({ post }) => {
  return (
    <ListingBox>
      <Title>
        <Link to={post.slug}>{post.frontmatter.title}</Link>
      </Title>
      <InfoBar>
        <p>
          <CalIcon size={18} />
          {post.frontmatter.date}
        </p>
        <p> • </p>
        <p>
          <BookIcon size={18} />
          {post.timeToRead}
          {post.timeToRead > 1 ? ' minutes' : ' minute'} to read
        </p>
      </InfoBar>
    </ListingBox>
  )
}

const ListingBox = styled.article`
  padding: 2px;
  margin-bottom: 1em;
`

const Title = styled.h3`
  line-height: 1.1em;
  display: inline-block;
  padding: 4px;
  color: ${({ theme }) => theme.color.text};
  box-shadow: inset 0 -0.4em 0 ${({ theme }) => theme.color.primary};
  transition: 250ms;
  &:hover {
    box-shadow: inset 0 -1.25em 0 ${({ theme }) => theme.color.primary};
  }
  text-decoration: none;
  margin: 0;
  a {
    color: inherit;
    text-decoration: none;
    padding: 4px;
    &:hover {
      color: inherit;
      text-decoration: none;
    }
  }
`

const InfoBar = styled.div`
  display: flex;
  ${media.lessThan('medium')`
  justify-content: space-between;
  `}
  margin-bottom: 5px;
  p {
    font-size: 16px;
    margin: 0;
    padding: 4px;
    display: inline-flex;
    align-self: center;
  }
`
const CalIcon = styled(CalendarOutline)`
  margin-right: 0.3em;
  height: 1em;
  color: ${({ theme }) => theme.color.secondary};
  align-self: center;
`

const BookIcon = styled(BookOpenOutline)`
  align-self: center;
  margin-right: 0.3em;
  height: 1em;
  color: ${({ theme }) => theme.color.secondary};
`

export default PostListing
