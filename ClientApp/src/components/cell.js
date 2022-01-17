import React from 'react'
import styled from 'styled-components'

const CellGroup = styled.div`
    display: grid;
    grid-template-columns: 40px auto;
    grid-gap: 5px;
    align-items: center;
`

const CellImage = styled.div`
    width: 60px;
    height: 60px;
    background: black;
    border-radius: 10px;
    background-image: url(${props => props.image});
    background-size: 60px;
    text-align: center;
`

const CellTitle = styled.div`
    font-size: 20px;
    padding: 30px 0;
    color: rgba(0, 0, 0, 0.8);

`

const Cell = props => (
    <CellGroup>
        <CellImage>&#9889;</CellImage>
        <CellTitle>{props.title}</CellTitle>
    </CellGroup>
)

export default Cell