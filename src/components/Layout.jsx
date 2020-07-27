import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import useLocalStorage from '../utils/hooks'
import { lightTheme, darkTheme } from '../utils/theme'
import Header from './Header'

const Layout = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('mode', 'light')
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
  font-size: 18px;
  font-family: "Noto Sans", sans-serif;
}

p {
  line-height: 31px;
}

h1,h2,h3,h4 {
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  font-family: "Bree Serif", serif;
}

h1 {
  box-shadow: inset 0 -0.4em 0 ${({ theme }) => theme.heading};
  font-size: 2em;
  margin-bottom: 1.7em;
}

h2 {
  font-size: 1.6em;
  line-height: 2.6em;
  margin-top: 2.7em;
  margin-bottom: 1em;
}

h3 {
  font-size: 1.28em;
  line-height: 2.11;
  margin-top: 1.7em;
  margin-bottom: 0.67em;
}

p, ul, ol, blockquote, pre {
  margin-bottom: 1.7em;
}

ul, ol {
  margin-left: 1.7em;
}

li {
  margin-bottom: 0.67em;
}

code, pre, kbd {
  font-size: 16px;
  font-family: "Fira Code", monospace;
}

pre {
  padding: 0.67em;
}

code {
  overflow-x: scroll;
  padding: 3px 4px;
  border-radius: 7px;
  margin: 0 1px;
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
  padding-left: 1em;

}
`

export default Layout
