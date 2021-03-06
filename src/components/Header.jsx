import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import media from 'styled-media-query'

import DarkModeSwitch from './DarkModeSwitch'

const Header = ({ theme, setTheme }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <HeaderBox>
      <Brand to="/">{data.site.siteMetadata.title}</Brand>
      <NavBox>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavBox>
      <DarkModeSwitch theme={theme} setTheme={setTheme} />
    </HeaderBox>
  )
}

const HeaderBox = styled.header`
  margin-bottom: 2em;
  justify-content: space-between;
  align-items: center;
  display: flex;
  ${media.lessThan('medium')`flex-direction: column`}
`

const Brand = styled(Link)`
  font-family: 'Bree Serif', serif;
  font-size: 1.5em;
  font-weight: bold;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.color.text};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.color.text};
    text-decoration: none;
  }
`

const NavBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const NavLink = styled(Link)`
  box-shadow: inset 0 -0.4em 0 ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.text};
  font-size: 0.85em;
  line-height: 1em;
  margin-right: 0.4em;
  letter-spacing: 0.1em;
  padding: 0.125em;
  text-decoration: none;
  transition: 250ms;
  text-transform: uppercase;
  &:hover {
    color: inherit;
    box-shadow: inset 0 -1.25em 0 ${({ theme }) => theme.color.primary};
    text-decoration: none;
  }
`

export default Header
