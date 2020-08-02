import React from 'react'
import styled from 'styled-components'

const randomColor = () => {
  const colors = ['#DB2B39', '#00F0B5', '#F96E46', '#FFC15E', '#F786AA']
  return colors[Math.floor(Math.random() * colors.length)]
}

const Label = ({ children }) => {
  return (
    <>
      <LabelStyle bg={randomColor()}>{children}</LabelStyle>{' '}
    </>
  )
}

const LabelStyle = styled.span`
  border-radius: 1em;
  background-color: ${props => props.bg};
  padding: 0.25em;
  font-size: 0.8em;
  margin-right: 0.5em;
`

export default Label
