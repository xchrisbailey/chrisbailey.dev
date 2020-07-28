import React from 'react'
import { ThemeProvider } from 'styled-components'

import useLocalStorage from '../utils/hooks'
import { lightTheme, darkTheme } from '../utils/theme'
import Header from './Header'
import Container from './styles/Container'
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

export default Layout
