import React, { FC } from 'react'
import styled from '@emotion/styled'

export interface CellProps {
  x: number
  y: number
  cellId: string
  cellNumber: number
  aliveColor: string
  oldColor: string
  deadColor: string
  onClick: (x: number, y: number) => void
}

export const CellItem = styled.div`
  background-color: #00d0ff;
  padding: 10px;
  width: 15px;
  height: 15px;
  border: 1px solid white;
`

export const Cell: FC<CellProps> = ({
  x,
  y,
  cellId,
  cellNumber,
  onClick,
}: CellProps) => {
  return (
    <CellItem
      data-testid={cellId}
      id={cellId}
      onClick={() => onClick(x, y)}
      role="CellItem"
    >
      {cellNumber}
    </CellItem>
  )
}
