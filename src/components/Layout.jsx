import React from 'react'
import { Link } from 'gatsby'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import useLocalStorage from '../utils/hooks'
import { lightTheme, darkTheme } from '../utils/theme'
import DarkModeSwitch from './DarkModeSwitch'

const Layout = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('light')
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Container>
        <GlobalStyles />
        <DarkModeSwitch theme={theme} setTheme={setTheme} />
        <Link to="/">chris bailey (dev)</Link>
        {children}
      </Container>
    </ThemeProvider>
  )
}

const Container = styled.div`
  max-width: 650px;
  margin: 2em auto;
`

const GlobalStyles = createGlobalStyle`
:root {
  --color-purple-dark: rgb(197, 153, 255);
  --color-purple-light: rgb(216, 187, 255);
}

body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
}

h1,h2,h3 {
  color: ${({ theme }) => theme.heading};
}

code {
  background-color: #262335;
  padding: 3px;
  border-radius: 4px;
  color: #36F9F6;
}

a {
  text-decoration: none;
  color: var(--color-purple-dark);
  &:hover {
    text-decoration: underline;
    text-decoration-color: var(--color-purple-light);
  }
}

blockquote {
  margin-left: 0;
  border-left: 8px solid ${({ theme }) => theme.heading};
  padding: 6px;
}
`

export default Layout
