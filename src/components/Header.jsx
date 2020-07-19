import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import DarkModeSwitch from './DarkModeSwitch'

const Header = ({ theme, setTheme }) => {
  return (
    <HeaderBox>
      <Brand to="/">chris bailey (dev)</Brand>
      <DarkModeSwitch theme={theme} setTheme={setTheme} />
    </HeaderBox>
  )
}

const HeaderBox = styled.header`
  margin-bottom: 2em;
  justify-content: space-between;
  align-items: center;
  display: flex;
`

const Brand = styled(Link)`
  font-family: 'Roboto Slab', sans-serif;
  font-size: 1.5em;
  font-weight: bold;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.text};
  &:hover {
    text-decoration: none;
  }
`

export default Header
