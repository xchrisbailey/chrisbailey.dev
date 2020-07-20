import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import useLocalStorage from '../utils/hooks'
import { lightTheme, darkTheme } from '../utils/theme'
import Header from './Header'

const Layout = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('light')
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Container>
        <GlobalStyles />
        <Header theme={theme} setTheme={setTheme} />
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
  --color-pink-dark: #E972AF;
  --color-pink-light: #EE92C2;
}

body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
}

h1,h2,h3,h4 {
  color: ${({ theme }) => theme.text};
  font-weight: bold;
}

h1 {
  box-shadow: inset 0 -0.4em 0 ${({ theme }) => theme.heading};
}

code {
  /* background-color: #262335; */
  padding: 3px;
  border-radius: 4px;
  /* color: #36F9F6; */
}

a {
  text-decoration: none;
  color: var(--color-pink-dark);
  text-decoration: underline;
  &:hover {
    color: var(--color-pink-light);
  }
}

blockquote {
  margin-left: 0;
  border-left: 8px solid ${({ theme }) => theme.heading};
  padding: 6px;
}
`

export default Layout
