import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import useLocalStorage from '../utils/hooks'
import { lightTheme, darkTheme } from '../utils/theme'
import Header from './Header'
import GlobalStyles from './styles/globalStyles'

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
  padding: 1em;
  margin: 2em auto;
`

export default Layout
