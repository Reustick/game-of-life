import React, { FC, ReactElement } from 'react'
import styled from '@emotion/styled'
import { Cell } from './Cell'

export interface GridProps {
  x: number
  y: number
  onClick: (x: number, y: number) => void
}

export const Grid: FC<GridProps> = ({ x, y, onClick }: GridProps) => {
  const matrix: Array<ReactElement> = []
  let k: number = 1

  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      const cellId = i + '_' + j
      matrix.push(
        <Cell
          x={i}
          y={j}
          cellId={cellId}
          key={cellId}
          onClick={() => onClick(i, j)}
          np={k}
          aliveColor={''}
          deadColor={''}
          oldColor={''}
        />
      )
      k++
    }
  }
  return <Wrapper>{matrix}</Wrapper>
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, auto);
  width: max-content;
  padding: 1vw;
  margin: 0 auto;
`
