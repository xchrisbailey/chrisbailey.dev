import React from 'react'
import { Link } from 'gatsby'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import useLocalStorage from '../utils/hooks'

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  heading: 'rgb(197, 153, 255)',
  background: '#363537',
}
export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  heading: 'rgb(216, 187, 255)',
  background: '#999',
}

const Layout = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('light')
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Container>
        <GlobalStyles />
        <SwitchContainer>
          <Switch for="checkbox" title="change color scheme to dark mode">
            <input
              type="checkbox"
              id="checkbox"
              onClick={() =>
                theme === 'light' ? setTheme('dark') : setTheme('light')
              }
              checked={theme === 'light'}
            />
            <div className="slider round" />
            <div className="toggle-moon">
              <span role="img" aria-label="moon emoji">
                🌙
              </span>
            </div>
            <div className="toggle-sun">
              <span role="img" aria-label="sun emoji">
                ☀️
              </span>
            </div>
          </Switch>
        </SwitchContainer>
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

const SwitchContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`
const Switch = styled.label`
  display: flex;
  height: 36px;
  position: relative;
  width: 70px;
  input {
    display: none;
  }
  .slider {
    content: '';
    background-color: #fff;
    border: 1px solid #000;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
  }

  .slider:before {
    background-color: #333;
    border: 1px solid #000;
    bottom: 3px;
    content: '';
    height: 26px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 26px;
    z-index: 421;
  }

  input:checked + .slider {
    background-color: #101211;
  }

  input:checked + .slider:before {
    transform: translateX(34px);
    border-color: #cfcfcf;
    background-color: #efefef;
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .toggle-moon,
  .toggle-sun {
    width: 50%;
    text-align: center;
    padding: 0.25em;
    position: relative;
    z-index: 420;
  }
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
`

export default Layout
