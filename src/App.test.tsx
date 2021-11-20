import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { App } from './App'
import { CellItem } from '@/components/Cell'

describe('App', () => {
  const onClick = jest.fn()
  test('renders App component', () => {
    render(<App />)
    screen.debug()
    expect(screen.getByRole('app')).toBeInTheDocument()
    expect(screen.getAllByRole('CellItem')).toHaveLength(100)
  })
  test('cell should call callback', () => {
    render(<CellItem role="CellItem" onClick={onClick} data-testid={'0_3'} />)
    screen.debug()
    fireEvent.click(screen.getByTestId('0_3'))
    expect(onClick).toHaveBeenCalled()
  })
})
