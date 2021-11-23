import React, { useState } from 'react'
import { Grid } from '@/components/Grid'
import { DescriptionOfRules } from '@/components/DescriptionOfRules'
import styled from '@emotion/styled'
import { ControlMenu } from '@/components/ControlMenu'
import { GenerationCounter } from '@/components/GenerationCounter'

const AppBody = styled.div`
  background-image: radial-gradient(#c44, #111);
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const App = () => {
  const [selectCell, setSelectCell] = useState({ x: 0, y: 0 })
  const rows = 30
  const columns = 50

  const cl = (x: number, y: number): void => {
    console.log('x: ' + x + ', y: ' + y)
    setSelectCell({ x, y })
  }

  return (
    <AppBody role="app">
      <ControlMenu />
      <Grid x={rows} y={columns} onClick={cl} />
      <div>
        Выбрана ячейка с координатами:{' '}
        {`x: ${selectCell.x + 1}, y: ${selectCell.y + 1}`}
      </div>
      <GenerationCounter />
      <DescriptionOfRules />
    </AppBody>
  )
}
