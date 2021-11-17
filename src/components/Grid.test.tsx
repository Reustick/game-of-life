import React from 'react'
import { render, screen } from '@testing-library/react'

import { Grid } from '@/components/Grid'

describe('Render wrapper', () => {
  test('renders wrapper component', () => {
    render(
      <Grid
        x={0}
        y={0}
        onClick={function (x: number, y: number): void {
          throw new Error('Function not implemented.')
        }}
      />
    )
    screen.debug()
    expect(screen.getByRole('wrapper')).toBeInTheDocument()
  })
})
