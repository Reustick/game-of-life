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
  background-color: #000;
  width: 11px;
  height: 11px;
  border: 1px solid #333;
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
    ></CellItem>
  )
}
