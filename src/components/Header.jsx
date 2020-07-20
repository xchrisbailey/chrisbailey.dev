import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import media from 'styled-media-query'

import DarkModeSwitch from './DarkModeSwitch'

const Header = ({ theme, setTheme }) => {
  return (
    <>
      <HeaderBox>
        <Brand to="/">chris bailey (dev)</Brand>
        <NavBox>
          <NavLink to="/">About</NavLink>
          <NavLink to="/">Works</NavLink>
          <NavLink to="/">Contact</NavLink>
        </NavBox>
        <DarkModeSwitch theme={theme} setTheme={setTheme} />
      </HeaderBox>
    </>
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
  font-family: 'Roboto Slab', sans-serif;
  font-size: 1.25em;
  font-weight: bold;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }
`

const NavBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const NavLink = styled(Link)`
  box-shadow: inset 0 -0.4em 0 ${({ theme }) => theme.heading};
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  line-height: 14px;
  margin-right: 0.4em;
  padding: 0.125em;
  text-decoration: none;
  transition: 250ms;
  text-transform: uppercase;
  &:hover {
    color: inherit;
    box-shadow: inset 0 -1.25em 0 ${({ theme }) => theme.heading};
    text-decoration: none;
  }
`

export default Header
