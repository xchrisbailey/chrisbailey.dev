import React from 'react'
import styled from 'styled-components'

const randomColor = () => {
  const colors = ['#DB2B39', '#00F0B5', '#F96E46', '#FFC15E', '#F786AA']
  return colors[Math.floor(Math.random() * colors.length)]
}

const Label = ({ children, random }) => {
  if (random) {
    return (
      <>
        <LabelStyle bg={randomColor()}>{children}</LabelStyle>{' '}
      </>
    )
  }
  return <LabelStyle>{children}</LabelStyle>
}

const LabelStyle = styled.span`
  border-radius: 1em;
  background-color: ${props =>
    props.bg ? props.bg : props.theme.color.primary};
  padding: 0.25em 0.4em;
  font-size: 0.8em;
  font-family: 'Fira Code', monospace;
  margin-right: 0.5em;
`

export default Label
