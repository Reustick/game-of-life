import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { App } from './App'
// import { Grid } from '@/components/Grid'
// import { Cell } from '@/components/Cell'

describe('App', () => {
  test('renders App component', () => {
    render(<App />)
    expect(screen.getByRole('app')).toBeInTheDocument()
    expect(screen.getAllByRole('CellItem')).toHaveLength(100)
  })
})

// describe('events', () => {
//   test('cell should call callback', () => {
//     const handleChange = jest.fn()
//     const cell = render(
//       <Cell
//         x={0}
//         y={0}
//         cellId={''}
//         cellNumber={0}
//         aliveColor={''}
//         oldColor={''}
//         deadColor={''}
//         onClick={function (x: number, y: number): void {
//           throw new Error('Function not implemented.')
//         }}
//       />
//     )
//     screen.debug()
//     expect(cell).not.toBeCalled()
//     fireEvent.click(screen.getAllByRole('CellItem'))
//   })
// })
