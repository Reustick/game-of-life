import React, { FC, ReactElement } from 'react'
import styled from '@emotion/styled'
import { Cell } from './Cell'

export interface GridProps {
  x: number
  y: number
  onClick: (x: number, y: number) => void
}

export const Grid: FC<GridProps> = ({ x, y, onClick }) => {
  const matrix: Array<ReactElement> = []
  const width: number = y * 32
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
          alive={false}
          aliveColor={''}
          deadColor={''}
        />
      )
      k++
    }
  }
  return (
    <div>
      <div>Компонент Field</div>
      <div style={{ width: width, lineHeight: 0.5 }}>{matrix}</div>
    </div>
  )
}

// const GridItem = styled.div`
//   display: grid;
//   width: max-content;
//   padding: 1vw;
// `
