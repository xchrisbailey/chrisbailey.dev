import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const Grid = ({ children, columns }) => {
  return <GridBox columns={columns}>{children}</GridBox>
}

const GridBox = styled.section`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.columns}, 1fr)`};
  grid-gap: 10px;
  align-items: start;
`

export default Grid
