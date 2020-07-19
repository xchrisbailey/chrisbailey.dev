import React from 'react'
import { Link } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <GlobalStyles />
        <Link to="/">chris bailey (dev)</Link>
        {children}
      </Container>
    </>
  )
}

const Container = styled.div`
  max-width: 650px;
  margin: 2em auto;
`

const GlobalStyles = createGlobalStyle`
:root {
  --color-purple-dark: rgb(100,44,169);
  --color-purple-light: rgb(158, 109, 217);
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
`

export default Layout
