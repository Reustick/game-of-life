import { Cell } from 'components/Cell'
import React from 'react'

export const App = () => {
  return (
    <div>
      <h1>Game of life</h1>
      <Cell
        alive={false}
        aliveColor={''}
        deadColor={''}
        onClick={function (x: number, y: number): void {
          throw new Error('Function not implemented.')
        }}
        x={0}
        y={0}
        cellId={''}
        np={0}
      ></Cell>
    </div>
  )
}
