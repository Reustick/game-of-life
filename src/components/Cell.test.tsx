import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Cell, CellItem } from './Cell'

describe('Render CellItem', () => {
  test('Renders CellItem component', () => {
    render(
      <Cell
        x={0}
        y={0}
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
  // test('cell should call callback', () => {
  //   const onClick = jest.fn()
  //   fireEvent.click(screen.getByRole('CellItem'))
  //   expect(onClick).toHaveBeenCalledTimes(1)
  // })
})
