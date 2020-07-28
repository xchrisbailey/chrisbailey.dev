import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
:root {
  --color-purple-dark: #B47AEA;
  --color-purple-light: #BD93D8;
}

body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  font-family: "Noto Sans", sans-serif;
}

p {
  line-height: 1.7em;
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
  color: var(--color-purple-dark);
  text-decoration: underline;
  &:hover {
    color: var(--color-purple-light);
  }
}

blockquote {
  margin-left: 0;
  border-left: 0.75em solid ${({ theme }) => theme.heading};
  padding-left: 1em;
}
`

export default GlobalStyles