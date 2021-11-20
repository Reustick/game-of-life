import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Cell } from './Cell'

describe('Render CellItem', () => {
  test('Renders CellItem component', () => {
    render(
      <Cell
        x={0}
        y={0}
        data-testid={''}
        cellId={''}
        cellNumber={0}
        aliveColor={''}
        oldColor={''}
        deadColor={''}
        onClick={function (x: number, y: number): void {
          throw new Error('Function not implemented.')
        }}
      />
    )
    screen.debug()
    expect(screen.getByRole('CellItem')).toBeInTheDocument()
  })
})
