import React, { useState } from 'react'
import { Grid } from '@/components/Grid'
import { DescriptionOfRules } from '@/components/DescriptionOfRules'

export const App = () => {
  const [selectCell, setSelectCell] = useState({ x: 0, y: 0 })
  const rows = 10
  const columns = 10

  const cl = (x: number, y: number): void => {
    console.log('x: ' + x + ', y: ' + y)
    setSelectCell({ x, y })
  }

  return (
    <div role="app">
      <Grid x={rows} y={columns} onClick={cl} />
      <div>
        Выбрана ячейка с координатами:{' '}
        {`x: ${selectCell.x + 1}, y: ${selectCell.y + 1}`}
      </div>
      <DescriptionOfRules />
    </div>
  )
}
